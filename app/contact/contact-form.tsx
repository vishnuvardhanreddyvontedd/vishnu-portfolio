"use client";

import { useState } from "react";
import { ArrowUpRight } from "../components/icons";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success-state">
        <div className="success-icon">✓</div>
        <h3>Message sent!</h3>
        <p>Thank you for reaching out. I will get back to you as soon as possible, usually within 24 hours.</p>
        <button 
          onClick={() => setStatus("idle")} 
          className="button button-quiet" 
          style={{ marginTop: "20px" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className={errors.name ? "input-error" : ""}
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: "" });
          }}
          placeholder="John Doe"
          required
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className={errors.email ? "input-error" : ""}
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: "" });
          }}
          placeholder="john@example.com"
          required
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          className={errors.message ? "input-error" : ""}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: "" });
          }}
          placeholder="Tell me about your project..."
          required
        />
        {errors.message && <span className="error-text">{errors.message}</span>}
      </div>

      {status === "error" && (
        <span className="error-text" style={{ textAlign: "center" }}>
          Something went wrong. Please try again.
        </span>
      )}

      <button 
        type="submit" 
        disabled={status === "submitting"} 
        className="button button-primary"
        style={{ width: "100%", marginTop: "8px" }}
      >
        {status === "submitting" ? "Sending..." : "Send Message"} <ArrowUpRight />
      </button>
    </form>
  );
}
