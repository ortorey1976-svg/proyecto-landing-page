import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Send, Calendar, MessageCircle, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const WHATSAPP_URL = "https://wa.me/529996359889?text=Hola,%20acabo%20de%20enviar%20el%20formulario%20de%20contacto";
const CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3cHH1hiYntiDQrby4vJLKpUAuFChAX5j-q4fL7VsoLRh1cJQqn4_KFAFZukXnU3PEoJ7KYpC2s";
const PRIVACY_URL = "https://ortorey1976-svg.github.io/privacidad-datos/";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    motivo: "",
    zona_afectada: "",
    ciudad: "",
    mensaje: "",
    acepta_privacidad: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, zona_afectada: value }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({ ...prev, acepta_privacidad: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.acepta_privacidad) {
      toast.error("Debes aceptar el aviso de privacidad para continuar");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSuccess(true);
      toast.success("¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.");
      
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        motivo: "",
        zona_afectada: "",
        ciudad: "",
        mensaje: "",
        acepta_privacidad: false
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contacto" className="py-16 lg:py-24 bg-white" data-testid="contact-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-slate-100 overflow-hidden" data-testid="contact-success">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                ¡Gracias por contactarnos!
              </h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Hemos recibido tu información. Nos pondremos en contacto contigo 
                a la brevedad para dar seguimiento a tu solicitud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="rounded-full px-6 bg-teal-600 hover:bg-teal-700"
                  data-testid="success-whatsapp-btn"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Continuar por WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-6"
                  onClick={() => setIsSuccess(false)}
                  data-testid="send-another-btn"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6" data-testid="contact-title">
              Agenda tu valoración
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Da el siguiente paso para valorar tu caso. Escríbenos por WhatsApp, 
              agenda tu cita en línea o completa el formulario y nos pondremos en contacto contigo.
            </p>

            {/* Quick Actions */}
            <div className="space-y-4 mb-8">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20"
                data-testid="contact-whatsapp-btn"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8 border-slate-200 hover:bg-slate-50 ml-0 sm:ml-4"
                data-testid="contact-calendar-btn"
              >
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Cita
                </a>
              </Button>
            </div>

            {/* Benefits */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-4">¿Por qué contactarnos?</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Valoración personalizada de tu caso</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Explicación clara de opciones de tratamiento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Atención con tecnología de vanguardia</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Seguimiento post-consulta</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <Card className="border-slate-100 shadow-xl" data-testid="contact-form-card">
              <CardContent className="p-6 sm:p-8">
                {/* Form Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                  Solicita tu valoración
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="rounded-xl h-12"
                      data-testid="input-nombre"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="999-123-4567"
                        className="rounded-xl h-12"
                        data-testid="input-telefono"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Correo electrónico *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="rounded-xl h-12"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  {/* Motivo */}
                  <div>
                    <label htmlFor="motivo" className="block text-sm font-medium text-slate-700 mb-2">
                      Motivo de consulta *
                    </label>
                    <Input
                      id="motivo"
                      name="motivo"
                      type="text"
                      required
                      value={formData.motivo}
                      onChange={handleChange}
                      placeholder="Ej: Dolor de rodilla, segunda opinión, etc."
                      className="rounded-xl h-12"
                      data-testid="input-motivo"
                    />
                  </div>

                  {/* Zona & Ciudad Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Zona afectada *
                      </label>
                      <Select 
                        value={formData.zona_afectada} 
                        onValueChange={handleSelectChange}
                        required
                      >
                        <SelectTrigger 
                          className="rounded-xl h-12"
                          data-testid="select-zona"
                        >
                          <SelectValue placeholder="Selecciona una zona" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rodilla">Rodilla</SelectItem>
                          <SelectItem value="cadera">Cadera</SelectItem>
                          <SelectItem value="hombro">Hombro</SelectItem>
                          <SelectItem value="otra">Otra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="ciudad" className="block text-sm font-medium text-slate-700 mb-2">
                        Ciudad *
                      </label>
                      <Input
                        id="ciudad"
                        name="ciudad"
                        type="text"
                        required
                        value={formData.ciudad}
                        onChange={handleChange}
                        placeholder="Ej: Mérida, Cancún"
                        className="rounded-xl h-12"
                        data-testid="input-ciudad"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">
                      Mensaje adicional (opcional)
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos más sobre tu caso..."
                      className="rounded-xl min-h-[80px]"
                      data-testid="input-mensaje"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="acepta_privacidad"
                      checked={formData.acepta_privacidad}
                      onCheckedChange={handleCheckboxChange}
                      className="mt-1"
                      data-testid="checkbox-privacidad"
                    />
                    <label htmlFor="acepta_privacidad" className="text-sm text-slate-600 leading-relaxed">
                      He leído y acepto el{" "}
                      <a
                        href={PRIVACY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 underline"
                        data-testid="privacy-link"
                      >
                        Aviso de Privacidad
                      </a>
                      . *
                    </label>
                  </div>

                  {/* Legal text */}
                  <p className="text-xs text-slate-500">
                    Tus datos serán utilizados únicamente para dar seguimiento a tu 
                    solicitud de información o cita médica, conforme a nuestro Aviso de Privacidad.
                  </p>

                  {/* Submit - Botón en TEAL */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.acepta_privacidad}
                    className="w-full rounded-xl h-12 bg-teal-600 hover:bg-teal-700 text-white font-semibold disabled:bg-slate-300"
                    data-testid="submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
