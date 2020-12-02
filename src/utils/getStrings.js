const STRINGS = {
  en: {
    THERAPY_IS_A_UNIQUE_AND_ONGOING: 'Therapy is a unique and ongoing journey. We appreciate your trust in Oliva for this part of it.',
    BEFORE_YOU_GO: `Before you go, we'd like to ask a couple of questions about how you're doing—and how we did.`,
    GIVE_FEEDBACK: 'Give feedback',
    THANKS_YOUR_FEEDBACK_DIRECTLY_HELPS: 'Thanks. Your feedback directly helps us provide better online therapy for people like you.',
    WELL_LET_YOUR_THERAPIST_KNOW: `We'll let your therapist know that you don't need more sessions right now.`,
    IF_YOU_EVER_NEED_US: `If you ever need us again, we're here.`,
  },
  es: {
    THERAPY_IS_A_UNIQUE_AND_ONGOING: 'La terapia es un proceso único y continuo. Agradecemos tu confianza en Oliva.',
    BEFORE_YOU_GO: 'Antes de despedirnos, nos encantaría contar contigo y hacerte un par de preguntas acerca de lo que hemos logrado juntos hasta hoy.',
    GIVE_FEEDBACK: 'De acuerdo',
    THANKS_YOUR_FEEDBACK_DIRECTLY_HELPS: 'Muchas gracias. Tus respuestas nos ayudan para poder ofrecer la mejor experiencia de terapia online a más personas como tú.',
    WELL_LET_YOUR_THERAPIST_KNOW: 'Nos aseguraremos de hacerle saber a tu terapeuta que, por el momento, has decidido no continuar con tus sesiones.',
    IF_YOU_EVER_NEED_US: 'Cuenta con nosotros para lo que necesites.',
  }
}

export const getStrings = (languageCode) => STRINGS[languageCode || 'en'];
