import { useState } from 'react'
import SocialIcon from './SocialIcon.jsx'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function validate() {
    const errs = {}
    if (!values.name.trim()) errs.name = 'Name is required.'
    if (!values.email.trim()) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Enter a valid email.'
    if (!values.message.trim()) errs.message = "Message can't be empty."
    return errs
  }


  const FORM_ENDPOINT = 'https://formspree.io/f/mbglkqle'

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) {
      setStatus('')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('sent')
        setValues({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="panel container" id="contact">
      <div className="panel-head">
        <h2>Contact</h2>
      </div>
      <div className="contact-grid">
        <div>
          <div className="contact-item">
           <span className="k"><SocialIcon name="mail" /> Email</span>
            <a className="v" href="mailto:aishmaskey555@gmail.com">
              aishmaskey555@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="k"><SocialIcon name="phone" /> Phone</span>
            <span className="v">(+977) 9746553700</span>
          </div>
          <div className="contact-item">
          <span className="k"><SocialIcon name="location" /> Location</span>
            <span className="v">Imadol, Lalitpur, Nepal</span>
          </div>
          <div className="contact-item">
            <span className="k"><SocialIcon name="linkedin" /> LinkedIn</span>
            <a className="v" href="https://www.linkedin.com/in/aish-maskeyace23" target="_blank" rel="noopener noreferrer">
              /in/aish-maskeyace23
            </a>
          </div>
          <div className="contact-item">
           <span className="k"><SocialIcon name="github" /> GitHub</span>
            <a className="v" href="https://github.com/aishmaskey23-ace" target="_blank" rel="noopener noreferrer">
              /aishmaskey23-ace
            </a>
          </div>
          <div className="contact-item">
      <span className="k"><SocialIcon name="facebook" /> Facebook</span>
            <a className="v" href="https://www.facebook.com/ace.maskey" target="_blank" rel="noopener noreferrer">
         Ace Maskey
            </a>
          </div>
           <div className="contact-item">
          <span className="k"><SocialIcon name="instagram" /> Instagram</span>
            <a className="v" href="https://www.instagram.com/__.aceeee.__/" target="_blank" rel="noopener noreferrer">
       __.aceeee.__
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="cf-name">Name</label>
            <input id="cf-name" name="name" value={values.name} onChange={handleChange} placeholder="Your name" />
            <span className="err">{errors.name || ''}</span>
          </div>
          <div className="field">
            <label htmlFor="cf-email">Email</label>
            <input id="cf-email" name="email" value={values.email} onChange={handleChange} placeholder="you@example.com" />
            <span className="err">{errors.email || ''}</span>
          </div>
          <div className="field">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              rows="4"
              value={values.message}
              onChange={handleChange}
              placeholder="Say hello…"
            ></textarea>
            <span className="err">{errors.message || ''}</span>
          </div>
          <button className="btn primary" type="submit" disabled={status === 'sending'} style={{ alignSelf: 'flex-start' }}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
                    <div className="form-status">
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && "Thank You! Your message has been sent — I'll get back to you soon."}
            {status === 'error' && 'Something went wrong. Please email me directly instead.'}
          </div>
        </form>
      </div>
    </section>
  )
}
