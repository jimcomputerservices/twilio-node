/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */


declare class VoiceResponse {
  /**
   * <Response> TwiML for Voice
   */
  constructor();

  /**
   * <Connect> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  connect(attributes?: VoiceResponse.ConnectAttributes): VoiceResponse.Connect;
  /**
   * <Dial> TwiML Verb
   *
   * @param number - Phone number to dial
   */
  dial(number: string): VoiceResponse.Dial;
  /**
   * <Dial> TwiML Verb
   *
   * @param attributes - TwiML attributes
   * @param number - Phone number to dial
   */
  dial(attributes: VoiceResponse.DialAttributes, number: string): VoiceResponse.Dial;
  /**
   * <Echo> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  echo(attributes?: object): void;
  /**
   * <Enqueue> TwiML Noun
   *
   * @param name - Friendly name
   */
  enqueue(name: string): VoiceResponse.Enqueue;
  /**
   * <Enqueue> TwiML Noun
   *
   * @param attributes - TwiML attributes
   * @param name - Friendly name
   */
  enqueue(attributes: VoiceResponse.EnqueueAttributes, name: string): VoiceResponse.Enqueue;
  /**
   * <Gather> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  gather(attributes?: VoiceResponse.GatherAttributes): VoiceResponse.Gather;
  /**
   * <Hangup> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  hangup(attributes?: object): void;
  /**
   * <Leave> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  leave(attributes?: object): void;
  /**
   * <Pause> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  pause(attributes?: VoiceResponse.PauseAttributes): void;
  /**
   * <Pay> Twiml Verb
   *
   * @param attributes - TwiML attributes
   */
  pay(attributes?: VoiceResponse.PayAttributes): VoiceResponse.Pay;
  /**
   * <Play> TwiML Verb
   *
   * @param attributes - TwiML attributes
   * @param url - Media URL
   */
  play(attributes?: VoiceResponse.PlayAttributes, url?: string): void;
  /**
   * <Prompt> Twiml Verb
   *
   * @param attributes - TwiML attributes
   */
  prompt(attributes?: VoiceResponse.PromptAttributes): VoiceResponse.Prompt;
  /**
   * <Queue> TwiML Noun
   *
   * @param name - Queue name
   */
  queue(name: string): void;
  /**
   * <Queue> TwiML Noun
   *
   * @param attributes - TwiML attributes
   * @param name - Queue name
   */
  queue(attributes: VoiceResponse.QueueAttributes, name: string): void;
  /**
   * <Record> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  record(attributes?: VoiceResponse.RecordAttributes): void;
  /**
   * <Redirect> TwiML Verb
   *
   * @param url - Redirect URL
   */
  redirect(url: string): void;
  /**
   * <Redirect> TwiML Verb
   *
   * @param attributes - TwiML attributes
   * @param url - Redirect URL
   */
  redirect(attributes: VoiceResponse.RedirectAttributes, url: string): void;
  /**
   * <Reject> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  reject(attributes?: VoiceResponse.RejectAttributes): void;
  /**
   * <Say> TwiML Verb
   *
   * @param message - Message to say
   */
  say(message: string): VoiceResponse.Say;
  /**
   * <Say> TwiML Verb
   *
   * @param attributes - TwiML attributes
   * @param message - Message to say
   */
  say(attributes: VoiceResponse.SayAttributes, message: string): VoiceResponse.Say;
  /**
   * <Sms> TwiML Noun
   *
   * @param message - Message body
   */
  sms(message: string): void;
  /**
   * <Sms> TwiML Noun
   *
   * @param attributes - TwiML attributes
   * @param message - Message body
   */
  sms(attributes: VoiceResponse.SmsAttributes, message: string): void;
  /**
   * Convert to XML
   */
  toString(): string;
}

declare namespace VoiceResponse {

  type ClientEvent = 'initiated'|'ringing'|'answered'|'completed';

  type ConferenceBeep = 'true'|'false'|'onEnter'|'onExit';

  type ConferenceEvent = 'start'|'end'|'join'|'leave'|'mute'|'hold'|'speaker';

  type ConferenceRecord = 'do-not-record'|'record-from-start';

  type ConferenceRecordingEvent = 'started'|'stopped'|'paused'|'resumed'|'completed'|'failed';

  type ConferenceRegion = 'us1'|'ie1'|'sg1'|'br1'|'au1'|'jp1';

  type ConferenceTrim = 'trim-silence'|'do-not-trim';

  type DialRecord = 'do-not-record'|'record-from-answer'|'record-from-ringing'|'record-from-answer-dual'|'record-from-ringing-dual';

  type DialRecordingEvent = 'in-progress'|'completed'|'failed';

  type DialRingTone = 'at'|'au'|'bg'|'br'|'be'|'ch'|'cl'|'cn'|'cz'|'de'|'dk'|'ee'|'es'|'fi'|'fr'|'gr'|'hu'|'il'|'in'|'it'|'lt'|'jp'|'mx'|'my'|'nl'|'no'|'nz'|'ph'|'pl'|'pt'|'ru'|'se'|'sg'|'th'|'uk'|'us'|'us-old'|'tw'|'ve'|'za';

  type DialTrim = 'trim-silence'|'do-not-trim';

  type GatherInput = 'dtmf'|'speech';

  type GatherLanguage = 'af-ZA'|'id-ID'|'ms-MY'|'ca-ES'|'cs-CZ'|'da-DK'|'de-DE'|'en-AU'|'en-CA'|'en-GB'|'en-IN'|'en-IE'|'en-NZ'|'en-PH'|'en-ZA'|'en-US'|'es-AR'|'es-BO'|'es-CL'|'es-CO'|'es-CR'|'es-EC'|'es-SV'|'es-ES'|'es-US'|'es-GT'|'es-HN'|'es-MX'|'es-NI'|'es-PA'|'es-PY'|'es-PE'|'es-PR'|'es-DO'|'es-UY'|'es-VE'|'eu-ES'|'il-PH'|'fr-CA'|'fr-FR'|'gl-ES'|'hr-HR'|'zu-ZA'|'is-IS'|'it-IT'|'lt-LT'|'hu-HU'|'nl-NL'|'nb-NO'|'pl-PL'|'pt-BR'|'pt-PT'|'ro-RO'|'sk-SK'|'sl-SI'|'fi-FI'|'sv-SE'|'vi-VN'|'tr-TR'|'el-GR'|'bg-BG'|'ru-RU'|'sr-RS'|'uk-UA'|'he-IL'|'ar-IL'|'ar-JO'|'ar-AE'|'ar-BH'|'ar-DZ'|'ar-SA'|'ar-IQ'|'ar-KW'|'ar-MA'|'ar-TN'|'ar-OM'|'ar-PS'|'ar-QA'|'ar-LB'|'ar-EG'|'fa-IR'|'hi-IN'|'th-TH'|'ko-KR'|'cmn-Hant-TW'|'yue-Hant-HK'|'ja-JP'|'cmn-Hans-HK'|'cmn-Hans-CN';

  type NumberEvent = 'initiated'|'ringing'|'answered'|'completed';

  type PayCurrency = 'usd'|'eur'|'gbp';

  type PayInput = 'dtmf';

  type PayLanguage = 'de-DE'|'en-AU'|'en-CA'|'en-GB'|'en-IN'|'en-IE'|'en-NZ'|'en-PH'|'en-ZA'|'en-US'|'es-ES'|'es-US'|'fr-CA'|'fr-FR'|'it-IT';

  type PayStatusCallbackMethod = 'GET'|'POST';

  type PayTokenType = 'one-time'|'reusable';

  type PayValidCardTypes = 'visa'|'master-card'|'amex'|'maestro'|'discover'|'optima'|'jcb'|'diners-club'|'enroute';

  type PromptCardType = 'visa'|'master-card'|'amex'|'maestro'|'discover'|'optima'|'jcb'|'diners-club'|'enroute';

  type PromptErrorType = 'timeout'|'invalid-card-number'|'invalid-card-type'|'invalid-date'|'invalid-security-code'|'internal-error';

  type PromptFor = 'payment-card-number'|'expiration-date'|'security-code'|'postal-code'|'payment-processing';

  type RecordTrim = 'trim-silence'|'do-not-trim';

  type RejectReason = 'rejected'|'busy';

  type SayLanguage = 'da-DK'|'de-DE'|'en-AU'|'en-CA'|'en-GB'|'en-IN'|'en-US'|'ca-ES'|'es-ES'|'es-MX'|'fi-FI'|'fr-CA'|'fr-FR'|'it-IT'|'ja-JP'|'ko-KR'|'nb-NO'|'nl-NL'|'pl-PL'|'pt-BR'|'pt-PT'|'ru-RU'|'sv-SE'|'zh-CN'|'zh-HK'|'zh-TW';

  type SayVoice = 'man'|'woman'|'alice'|'Polly.Geraint'|'Polly.Gwyneth'|'Polly.Mads'|'Polly.Naja'|'Polly.Hans'|'Polly.Marlene'|'Polly.Nicole'|'Polly.Russell'|'Polly.Amy'|'Polly.Brian'|'Polly.Emma'|'Polly.Raveena'|'Polly.Ivy'|'Polly.Joanna'|'Polly.Joey'|'Polly.Justin'|'Polly.Kendra'|'Polly.Kimberly'|'Polly.Matthew'|'Polly.Salli'|'Polly.Conchita'|'Polly.Enrique'|'Polly.Miguel'|'Polly.Penelope'|'Polly.Chantal'|'Polly.Celine'|'Polly.Mathieu'|'Polly.Dora'|'Polly.Karl'|'Polly.Carla'|'Polly.Giorgio'|'Polly.Mizuki'|'Polly.Liv'|'Polly.Lotte'|'Polly.Ruben'|'Polly.Ewa'|'Polly.Jacek'|'Polly.Jan'|'Polly.Maja'|'Polly.Ricardo'|'Polly.Vitoria'|'Polly.Cristiano'|'Polly.Ines'|'Polly.Carmen'|'Polly.Maxim'|'Polly.Tatyana'|'Polly.Astrid'|'Polly.Filiz'|'Polly.Vicki'|'Polly.Takumi'|'Polly.Seoyeon'|'Polly.Aditi';

  type SipEvent = 'initiated'|'ringing'|'answered'|'completed';

  type SsmlBreakStrength = 'none'|'x-weak'|'weak'|'medium'|'strong'|'x-strong';

  type SsmlEmphasisLevel = 'strong'|'moderate'|'reduced';

  type SsmlLangXmlLang = 'da-DK'|'nl-NL'|'en-AU'|'en-GB'|'en-IN'|'en-US'|'en-GB-WLS'|'fr-FR'|'fr-CA'|'de-DE'|'is-IS'|'it-IT'|'ja-JP'|'ko-KR'|'nb-NO'|'pl-PL'|'pt-BR'|'pt-PT'|'ro-RO'|'ru-RU'|'es-ES'|'es-US'|'sv-SE'|'tr-TR'|'cy-GB';

  type SsmlPhonemeAlphabet = 'ipa'|'x-sampa';

  type SsmlSayAsInterpretAs = 'character'|'spell-out'|'cardinal'|'number'|'ordinal'|'digits'|'fraction'|'unit'|'date'|'time'|'address'|'expletive'|'telephone';

  type SsmlSayAsRole = 'mdy'|'dmy'|'ymd'|'md'|'dm'|'ym'|'my'|'d'|'m'|'y'|'yyyymmdd';

  /**
   * Options to pass to client
   *
   * @property method - Client URL Method
   * @property statusCallback - Status Callback URL
   * @property statusCallbackEvent - Events to trigger status callback
   * @property statusCallbackMethod - Status Callback URL Method
   * @property url - Client URL
   */
  export interface ClientAttributes {
    method?: string;
    statusCallback?: string;
    statusCallbackEvent?: string;
    statusCallbackMethod?: string;
    url?: string;
  }

  /**
   * Options to pass to conference
   *
   * @property beep - Play beep when joining
   * @property endConferenceOnExit - End the conferenceon exit
   * @property eventCallbackUrl - Event callback URL
   * @property maxParticipants - Maximum number of participants
   * @property muted - Join the conference muted
   * @property record - Record the conference
   * @property recordingStatusCallback - Recording status callback URL
   * @property recordingStatusCallbackEvent - Recording status callback events
   * @property recordingStatusCallbackMethod - Recording status callback URL method
   * @property region - Conference region
   * @property startConferenceOnEnter - Start the conference on enter
   * @property statusCallback - Status callback URL
   * @property statusCallbackEvent - Events to call status callback URL
   * @property statusCallbackMethod - Status callback URL method
   * @property trim - Trim the conference recording
   * @property waitMethod - Wait URL method
   * @property waitUrl - Wait URL
   * @property whisper - Call whisper
   */
  export interface ConferenceAttributes {
    beep?: ConferenceBeep;
    endConferenceOnExit?: boolean;
    eventCallbackUrl?: string;
    maxParticipants?: number;
    muted?: boolean;
    record?: ConferenceRecord;
    recordingStatusCallback?: string;
    recordingStatusCallbackEvent?: string;
    recordingStatusCallbackMethod?: string;
    region?: ConferenceRegion;
    startConferenceOnEnter?: boolean;
    statusCallback?: string;
    statusCallbackEvent?: string;
    statusCallbackMethod?: string;
    trim?: ConferenceTrim;
    waitMethod?: string;
    waitUrl?: string;
    whisper?: string;
  }

  /**
   * Options to pass to connect
   *
   * @property action - Action URL
   * @property method - Action URL method
   */
  export interface ConnectAttributes {
    action?: string;
    method?: string;
  }

  /**
   * Options to pass to dial
   *
   * @property action - Action URL
   * @property answerOnBridge - Preserve the ringing behavior of the inbound call until the Dialed call picks up
   * @property callerId - Caller ID to display
   * @property hangupOnStar - Hangup call on star press
   * @property method - Action URL method
   * @property record - Record the call
   * @property recordingStatusCallback - Recording status callback URL
   * @property recordingStatusCallbackEvent - Recording status callback events
   * @property recordingStatusCallbackMethod - Recording status callback URL method
   * @property ringTone - Ringtone allows you to override the ringback tone that Twilio will play back to the caller while executing the Dial
   * @property timeLimit - Max time length
   * @property timeout - Time to wait for answer
   * @property trim - Trim the recording
   */
  export interface DialAttributes {
    action?: string;
    answerOnBridge?: boolean;
    callerId?: string;
    hangupOnStar?: boolean;
    method?: string;
    record?: DialRecord;
    recordingStatusCallback?: string;
    recordingStatusCallbackEvent?: string;
    recordingStatusCallbackMethod?: string;
    ringTone?: DialRingTone;
    timeLimit?: number;
    timeout?: number;
    trim?: DialTrim;
  }

  /**
   * Options to pass to enqueue
   *
   * @property action - Action URL
   * @property method - Action URL method
   * @property waitUrl - Wait URL
   * @property waitUrlMethod - Wait URL method
   * @property workflowSid - TaskRouter Workflow SID
   */
  export interface EnqueueAttributes {
    action?: string;
    method?: string;
    waitUrl?: string;
    waitUrlMethod?: string;
    workflowSid?: string;
  }

  /**
   * Options to pass to gather
   *
   * @property action - Action URL
   * @property bargeIn - Stop playing media upon speech
   * @property debug - Allow debug for gather
   * @property finishOnKey - Finish gather on key
   * @property hints - Speech recognition hints
   * @property input - Input type Twilio should accept
   * @property language - Language to use
   * @property maxSpeechTime - Max allowed time for speech input
   * @property method - Action URL method
   * @property numDigits - Number of digits to collect
   * @property partialResultCallback - Partial result callback URL
   * @property partialResultCallbackMethod - Partial result callback URL method
   * @property profanityFilter - Profanity Filter on speech
   * @property speechTimeout - Time to wait to gather speech input and it should be either auto or a positive integer.
   * @property timeout - Time to wait to gather input
   */
  export interface GatherAttributes {
    action?: string;
    bargeIn?: boolean;
    debug?: boolean;
    finishOnKey?: string;
    hints?: string;
    input?: string;
    language?: GatherLanguage;
    maxSpeechTime?: number;
    method?: string;
    numDigits?: number;
    partialResultCallback?: string;
    partialResultCallbackMethod?: string;
    profanityFilter?: boolean;
    speechTimeout?: string;
    timeout?: number;
  }

  /**
   * Options to pass to number
   *
   * @property method - TwiML URL method
   * @property sendDigits - DTMF tones to play when the call is answered
   * @property statusCallback - Status callback URL
   * @property statusCallbackEvent - Events to call status callback
   * @property statusCallbackMethod - Status callback URL method
   * @property url - TwiML URL
   */
  export interface NumberAttributes {
    method?: string;
    sendDigits?: string;
    statusCallback?: string;
    statusCallbackEvent?: string;
    statusCallbackMethod?: string;
    url?: string;
  }

  /**
   * Options to pass to parameter
   *
   * @property name - The name of the custom parameter
   * @property value - The value of the custom parameter
   */
  export interface ParameterAttributes {
    name?: string;
    value?: string;
  }

  /**
   * Options to pass to pause
   *
   * @property length - Length in seconds to pause
   */
  export interface PauseAttributes {
    length?: number;
  }

  /**
   * Options to pass to pay
   *
   * @property action - Action URL
   * @property chargeAmount - Amount to process. If value is greater than 0 then make the payment else create a payment token
   * @property credentialSid - SID for API keys to communicate with payment provider
   * @property currency - Currency of the amount attribute
   * @property description - Details regarding the payment
   * @property input - Input type Twilio should accept
   * @property language - Language to use
   * @property maxAttempts - Maximum number of allowed retries when gathering input
   * @property paymentConnector - Unique name for payment connector
   * @property postalCode - Prompt for postal code and it should be true/false or default postal code
   * @property securityCode - Prompt for security code
   * @property statusCallback - Status callback URL
   * @property statusCallbackMethod - Status callback method
   * @property timeout - Time to wait to gather input
   * @property tokenType - Type of token
   * @property validCardTypes - Comma separated accepted card types
   */
  export interface PayAttributes {
    action?: string;
    chargeAmount?: string;
    credentialSid?: string;
    currency?: PayCurrency;
    description?: string;
    input?: PayInput;
    language?: PayLanguage;
    maxAttempts?: number;
    paymentConnector?: string;
    postalCode?: string;
    securityCode?: boolean;
    statusCallback?: string;
    statusCallbackMethod?: PayStatusCallbackMethod;
    timeout?: number;
    tokenType?: PayTokenType;
    validCardTypes?: string;
  }

  /**
   * Options to pass to play
   *
   * @property digits - Play DTMF tones for digits
   * @property loop - Times to loop media
   */
  export interface PlayAttributes {
    digits?: string;
    loop?: number;
  }

  /**
   * Options to pass to prompt
   *
   * @property attempt - Current attempt count
   * @property cardType - Type of the credit card
   * @property errorType - Type of error
   * @property for_ - Name of the credit card data element
   */
  export interface PromptAttributes {
    attempt?: string;
    cardType?: string;
    errorType?: string;
    for_?: PromptFor;
  }

  /**
   * Options to pass to queue
   *
   * @property method - Action URL method
   * @property postWorkActivitySid - TaskRouter Activity SID
   * @property reservationSid - TaskRouter Reservation SID
   * @property url - Action URL
   */
  export interface QueueAttributes {
    method?: string;
    postWorkActivitySid?: string;
    reservationSid?: string;
    url?: string;
  }

  /**
   * Options to pass to record
   *
   * @property action - Action URL
   * @property finishOnKey - Finish recording on key
   * @property maxLength - Max time to record in seconds
   * @property method - Action URL method
   * @property playBeep - Play beep
   * @property recordingStatusCallback - Status callback URL
   * @property recordingStatusCallbackMethod - Status callback URL method
   * @property timeout - Timeout to begin recording
   * @property transcribe - Transcribe the recording
   * @property transcribeCallback - Transcribe callback URL
   * @property trim - Trim the recording
   */
  export interface RecordAttributes {
    action?: string;
    finishOnKey?: string;
    maxLength?: number;
    method?: string;
    playBeep?: boolean;
    recordingStatusCallback?: string;
    recordingStatusCallbackMethod?: string;
    timeout?: number;
    transcribe?: boolean;
    transcribeCallback?: string;
    trim?: RecordTrim;
  }

  /**
   * Options to pass to redirect
   *
   * @property method - Redirect URL method
   */
  export interface RedirectAttributes {
    method?: string;
  }

  /**
   * Options to pass to reject
   *
   * @property reason - Rejection reason
   */
  export interface RejectAttributes {
    reason?: RejectReason;
  }

  /**
   * Options to pass to room
   *
   * @property participantidentity - Participant identity when connecting to the Room
   */
  export interface RoomAttributes {
    participantidentity?: string;
  }

  /**
   * Options to pass to say
   *
   * @property language - Message langauge
   * @property loop - Times to loop message
   * @property voice - Voice to use
   */
  export interface SayAttributes {
    language?: SayLanguage;
    loop?: number;
    voice?: SayVoice;
  }

  /**
   * Options to pass to sip
   *
   * @property method - Action URL method
   * @property password - SIP Password
   * @property statusCallback - Status callback URL
   * @property statusCallbackEvent - Status callback events
   * @property statusCallbackMethod - Status callback URL method
   * @property url - Action URL
   * @property username - SIP Username
   */
  export interface SipAttributes {
    method?: string;
    password?: string;
    statusCallback?: string;
    statusCallbackEvent?: string;
    statusCallbackMethod?: string;
    url?: string;
    username?: string;
  }

  /**
   * Options to pass to sms
   *
   * @property action - Action URL
   * @property from - Number to send message from
   * @property method - Action URL method
   * @property statusCallback - Status callback URL
   * @property to - Number to send message to
   */
  export interface SmsAttributes {
    action?: string;
    from?: string;
    method?: string;
    statusCallback?: string;
    to?: string;
  }

  /**
   * Options to pass to ssmlBreak
   *
   * @property strength - Set a pause based on strength
   * @property time - Set a pause to a specific length of time in seconds or milliseconds, available values: [number]s, [number]ms
   */
  export interface SsmlBreakAttributes {
    strength?: SsmlBreakStrength;
    time?: string;
  }

  /**
   * Options to pass to ssmlEmphasis
   *
   * @property level - Specify the degree of emphasis
   */
  export interface SsmlEmphasisAttributes {
    level?: SsmlEmphasisLevel;
  }

  /**
   * Options to pass to ssmlLang
   *
   * @property xml:lang - Specify the language
   */
  export interface SsmlLangAttributes {
    "xml:lang"?: SsmlLangXmlLang;
  }

  /**
   * Options to pass to ssmlPhoneme
   *
   * @property alphabet - Specify the phonetic alphabet
   * @property ph - Specifiy the phonetic symbols for pronunciation
   */
  export interface SsmlPhonemeAttributes {
    alphabet?: SsmlPhonemeAlphabet;
    ph?: string;
  }

  /**
   * Options to pass to ssmlProsody
   *
   * @property pitch - Specify the pitch, available values: default, x-low, low, medium, high, x-high, +n%, -n%
   * @property rate - Specify the rate, available values: x-slow, slow, medium, fast, x-fast, n%
   * @property volume - Specify the volume, available values: default, silent, x-soft, soft, medium, loud, x-loud, +ndB, -ndB
   */
  export interface SsmlProsodyAttributes {
    pitch?: string;
    rate?: string;
    volume?: string;
  }

  /**
   * Options to pass to ssmlSayAs
   *
   * @property interpret-as - Specify the type of words are spoken
   * @property role - Specify the format of the date when interpret-as is set to date
   */
  export interface SsmlSayAsAttributes {
    "interpret-as"?: SsmlSayAsInterpretAs;
    role?: SsmlSayAsRole;
  }

  /**
   * Options to pass to ssmlSub
   *
   * @property alias - Substitute a different word (or pronunciation) for selected text such as an acronym or abbreviation
   */
  export interface SsmlSubAttributes {
    alias?: string;
  }

  /**
   * Options to pass to ssmlW
   *
   * @property role - Customize the pronunciation of words by specifying the word’s part of speech or alternate meaning
   */
  export interface SsmlWAttributes {
    role?: string;
  }

  /**
   * Options to pass to task
   *
   * @property priority - Task priority
   * @property timeout - Timeout associated with task
   */
  export interface TaskAttributes {
    priority?: number;
    timeout?: number;
  }


  class Client {

    /**
     * <Identity> TwiML Noun
     *
     * @param clientIdentity - Identity of the client to dial
     */
    identity(clientIdentity: string): void;
    /**
     * <Identity> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param clientIdentity - Identity of the client to dial
     */
    identity(attributes: object, clientIdentity: string): void;
    /**
     * <Parameter> TwiML Noun
     *
     * @param attributes - TwiML attributes
     */
    parameter(attributes?: VoiceResponse.ParameterAttributes): void;
  }


  class Connect {

    /**
     * <Autopilot> TwiML Noun
     *
     * @param name - Autopilot assistant sid or unique name
     */
    autopilot(name: string): void;
    /**
     * <Autopilot> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param name - Autopilot assistant sid or unique name
     */
    autopilot(attributes: object, name: string): void;
    /**
     * <Room> TwiML Noun
     *
     * @param name - Room name
     */
    room(name: string): void;
    /**
     * <Room> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param name - Room name
     */
    room(attributes: VoiceResponse.RoomAttributes, name: string): void;
  }


  class Dial {

    /**
     * <Client> TwiML Noun
     *
     * @param identity - Client identity
     */
    client(identity: string): VoiceResponse.Client;
    /**
     * <Client> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param identity - Client identity
     */
    client(attributes: VoiceResponse.ClientAttributes, identity: string): VoiceResponse.Client;
    /**
     * <Conference> TwiML Noun
     *
     * @param name - Conference name
     */
    conference(name: string): void;
    /**
     * <Conference> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param name - Conference name
     */
    conference(attributes: VoiceResponse.ConferenceAttributes, name: string): void;
    /**
     * <Number> TwiML Noun
     *
     * @param phoneNumber - Phone Number to dial
     */
    number(phoneNumber: string): void;
    /**
     * <Number> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param phoneNumber - Phone Number to dial
     */
    number(attributes: VoiceResponse.NumberAttributes, phoneNumber: string): void;
    /**
     * <Queue> TwiML Noun
     *
     * @param name - Queue name
     */
    queue(name: string): void;
    /**
     * <Queue> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param name - Queue name
     */
    queue(attributes: VoiceResponse.QueueAttributes, name: string): void;
    /**
     * <Sim> TwiML Noun
     *
     * @param simSid - SIM SID
     */
    sim(simSid: string): void;
    /**
     * <Sim> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param simSid - SIM SID
     */
    sim(attributes: object, simSid: string): void;
    /**
     * <Sip> TwiML Noun
     *
     * @param sipUrl - SIP URL
     */
    sip(sipUrl: string): void;
    /**
     * <Sip> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param sipUrl - SIP URL
     */
    sip(attributes: VoiceResponse.SipAttributes, sipUrl: string): void;
  }


  class Enqueue {

    /**
     * <Task> TwiML Noun
     *
     * @param body - TaskRouter task attributes
     */
    task(body: string): void;
    /**
     * <Task> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param body - TaskRouter task attributes
     */
    task(attributes: VoiceResponse.TaskAttributes, body: string): void;
  }


  class Gather {

    /**
     * <Pause> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */
    pause(attributes?: VoiceResponse.PauseAttributes): void;
    /**
     * <Play> TwiML Verb
     *
     * @param attributes - TwiML attributes
     * @param url - Media URL
     */
    play(attributes?: VoiceResponse.PlayAttributes, url?: string): void;
    /**
     * <Say> TwiML Verb
     *
     * @param message - Message to say
     */
    say(message: string): VoiceResponse.Say;
    /**
     * <Say> TwiML Verb
     *
     * @param attributes - TwiML attributes
     * @param message - Message to say
     */
    say(attributes: VoiceResponse.SayAttributes, message: string): VoiceResponse.Say;
  }


  class Pay {

    /**
     * <Prompt> Twiml Verb
     *
     * @param attributes - TwiML attributes
     */
    prompt(attributes?: VoiceResponse.PromptAttributes): VoiceResponse.Prompt;
  }


  class Prompt {

    /**
     * <Pause> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */
    pause(attributes?: VoiceResponse.PauseAttributes): void;
    /**
     * <Play> TwiML Verb
     *
     * @param attributes - TwiML attributes
     * @param url - Media URL
     */
    play(attributes?: VoiceResponse.PlayAttributes, url?: string): void;
    /**
     * <Say> TwiML Verb
     *
     * @param message - Message to say
     */
    say(message: string): VoiceResponse.Say;
    /**
     * <Say> TwiML Verb
     *
     * @param attributes - TwiML attributes
     * @param message - Message to say
     */
    say(attributes: VoiceResponse.SayAttributes, message: string): VoiceResponse.Say;
  }


  class Say {

    /**
     * Adding a Pause in <Say>
     *
     * @param attributes - TwiML attributes
     */
    ssmlBreak(attributes?: VoiceResponse.SsmlBreakAttributes): void;
    /**
     * Emphasizing Words in <Say>
     *
     * @param words - Words to emphasize
     */
    ssmlEmphasis(words: string): void;
    /**
     * Emphasizing Words in <Say>
     *
     * @param attributes - TwiML attributes
     * @param words - Words to emphasize
     */
    ssmlEmphasis(attributes: VoiceResponse.SsmlEmphasisAttributes, words: string): void;
    /**
     * Specifying Another Language for Specific Words in <Say>
     *
     * @param words - Words to speak
     */
    ssmlLang(words: string): void;
    /**
     * Specifying Another Language for Specific Words in <Say>
     *
     * @param attributes - TwiML attributes
     * @param words - Words to speak
     */
    ssmlLang(attributes: VoiceResponse.SsmlLangAttributes, words: string): void;
    /**
     * Adding a Pause Between Paragraphs in <Say>
     *
     * @param words - Words to speak
     */
    ssmlP(words: string): void;
    /**
     * Adding a Pause Between Paragraphs in <Say>
     *
     * @param attributes - TwiML attributes
     * @param words - Words to speak
     */
    ssmlP(attributes: object, words: string): void;
    /**
     * Using Phonetic Pronunciation in <Say>
     *
     * @param words - Words to speak
     */
    ssmlPhoneme(words: string): void;
    /**
     * Using Phonetic Pronunciation in <Say>
     *
     * @param attributes - TwiML attributes
     * @param words - Words to speak
     */
    ssmlPhoneme(attributes: VoiceResponse.SsmlPhonemeAttributes, words: string): void;
    /**
     * Controling Volume, Speaking Rate, and Pitch in <Say>
     *
     * @param words - Words to speak
     */
    ssmlProsody(words: string): void;
    /**
     * Controling Volume, Speaking Rate, and Pitch in <Say>
     *
     * @param attributes - TwiML attributes
     * @param words - Words to speak
     */
    ssmlProsody(attributes: VoiceResponse.SsmlProsodyAttributes, words: string): void;
    /**
     * Adding A Pause Between Sentences in <Say>
     *
     * @param words - Words to speak
     */
    ssmlS(words: string): void;
    /**
     * Adding A Pause Between Sentences in <Say>
     *
     * @param attributes - TwiML attributes
     * @param words - Words to speak
     */
    ssmlS(attributes: object, words: string): void;
    /**
     * Controlling How Special Types of Words Are Spoken in <Say>
     *
     * @param words - Words to be interpreted
     */
    ssmlSayAs(words: string): void;
    /**
     * Controlling How Special Types of Words Are Spoken in <Say>
     *
     * @param attributes - TwiML attributes
     * @param words - Words to be interpreted
     */
    ssmlSayAs(attributes: VoiceResponse.SsmlSayAsAttributes, words: string): void;
    /**
     * Pronouncing Acronyms and Abbreviations in <Say>
     *
     * @param words - Words to be substituted
     */
    ssmlSub(words: string): void;
    /**
     * Pronouncing Acronyms and Abbreviations in <Say>
     *
     * @param attributes - TwiML attributes
     * @param words - Words to be substituted
     */
    ssmlSub(attributes: VoiceResponse.SsmlSubAttributes, words: string): void;
    /**
     * Improving Pronunciation by Specifying Parts of Speech in <Say>
     *
     * @param words - Words to speak
     */
    ssmlW(words: string): void;
    /**
     * Improving Pronunciation by Specifying Parts of Speech in <Say>
     *
     * @param attributes - TwiML attributes
     * @param words - Words to speak
     */
    ssmlW(attributes: VoiceResponse.SsmlWAttributes, words: string): void;
  }
}

export = VoiceResponse;
