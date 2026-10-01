import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

type FormText = {
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  sent: string;
  error: string;
  notConfigured: string;
};

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'notConfigured';

export function ContactForm({ text }: { text: FormText }) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!serviceId || !templateId || !publicKey) {
      setStatus('notConfigured');
      return;
    }
    const data = new FormData(form);
    setStatus('sending');
    try {
      // Template variables: {{name}}, {{email}}, {{message}}
      await emailjs.send(
        serviceId,
        templateId,
        { name: data.get('name'), email: data.get('email'), message: data.get('message') },
        { publicKey },
      );
      form.reset();
      setStatus('sent');
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field"><label htmlFor="contact-name">{text.name}</label><input id="contact-name" name="name" required minLength={2} autoComplete="name" data-testid="input-contact-name" /></div>
      <div className="field"><label htmlFor="contact-email">{text.email}</label><input id="contact-email" name="email" type="email" required autoComplete="email" data-testid="input-contact-email" /></div>
      <div className="field"><label htmlFor="contact-message">{text.message}</label><textarea id="contact-message" name="message" rows={5} required minLength={10} data-testid="input-contact-message" /></div>
      <button className="button primary" type="submit" disabled={status === 'sending'} data-testid="button-send-message">
        {status === 'sending' ? text.sending : status === 'sent' ? <><Check size={15} /> {text.sent}</> : <>{text.send} <ArrowUpRight size={15} /></>}
      </button>
      {(status === 'error' || status === 'notConfigured') && <p className="form-status error" role="alert">{status === 'error' ? text.error : text.notConfigured}</p>}
    </form>
  );
}
