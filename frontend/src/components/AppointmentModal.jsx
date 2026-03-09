import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const APPOINTMENT_CALENDAR_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2dQ6CH_OFE9xf-dk-w2WoqpIgYCSzHhoaB_9AjXLBexU29iEBFuWC8DymBK4hSMT7D-qq5XI1I";

const AppointmentModal = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      data-testid="appointment-modal"
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        data-testid="modal-overlay"
      />
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-[95vw] max-w-4xl h-[85vh] max-h-[700px] flex flex-col animate-fade-in-up overflow-hidden"
        data-testid="modal-content"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <h2 className="text-xl font-bold text-slate-900">
            Agendar Cita
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-slate-200 text-slate-600 hover:text-slate-900"
            data-testid="modal-close-btn"
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </div>
        
        {/* Calendar iframe */}
        <div className="flex-1 p-2 sm:p-4 bg-white">
          <iframe
            src={APPOINTMENT_CALENDAR_URL}
            title="Agendar Cita - Google Calendar"
            className="w-full h-full rounded-lg border border-slate-200"
            frameBorder="0"
            allow="camera; microphone"
            data-testid="calendar-iframe"
          />
        </div>
        
        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50">
          <p className="text-xs text-slate-500 text-center">
            Selecciona una fecha y hora disponible para tu cita con el Dr. Armando Cárdenas
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
