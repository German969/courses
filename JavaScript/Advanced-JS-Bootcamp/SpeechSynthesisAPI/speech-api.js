// Speech Synthesis API

// part of the Web Speech aPI, along with Speech Recognition API

// Available un the window object
// Usage
speechSynthesis.speak(new SpeechSynthesisUtterance('Hey'))

// SpeechSynthesisUtterance
// represents a speech request
const utterance = new SpeechSynthesisUtterance('Hey')
// rate -> set speed (0.1 - 10)
// pitch -> (0 - 2)
// volume -> (0 - 1)
// lang -> set language (BCP 47 en-US it-IT)
// text -> set dinamically, max 32767 chars
// voice
const utterance = new SpeechSynthesisUtterance('Hey')
utterance.pitch = 1.5
utterance.volume = 0.5
utterance.rate = 8
speechSynthesis.speak(utterance)

// Change the voice
// See available browser list (not chrome)
console.log(`Voices #: ${speechSynthesis.getVoices().length}`)

speechSynthesis.getVoices().forEach(voice => {
  console.log(voice.name, voice.lang)
})
// See voices (chrome) (with a callback because if theres a network connection check on google servers)
const voiceschanged = () => {
  console.log(`Voices #: ${speechSynthesis.getVoices().length}`)
  speechSynthesis.getVoices().forEach(voice => {
    console.log(voice.name, voice.lang)
  })
}
speechSynthesis.onvoiceschanged = voiceschanged
// To check if a lang is available offline check localService property

// Cross browser implementation
const getVoices = () => {
  return new Promise(resolve => {
    let voices = speechSynthesis.getVoices()
    if (voices.length) {
      resolve(voices)
      return
    }
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices()
      resolve(voices)
    }
  })
}

const printVoicesList = async () => {
  ;(await getVoices()).forEach(voice => {
    console.log(voice.name, voice.lang)
  })
}

printVoicesList()

// Using a custom language
let utterance = new SpeechSynthesisUtterance('Ciao')
utterance.lang = 'it-IT'
speechSynthesis.speak(utterance)

// Use another voice
const lang = 'it-IT'
const voiceIndex = 1

const speak = async text => {
  if (!speechSynthesis) {
    return
  }
  const message = new SpeechSynthesisUtterance(text)
  message.voice = await chooseVoice()
  speechSynthesis.speak(message)
}

const getVoices = () => {
  return new Promise(resolve => {
    let voices = speechSynthesis.getVoices()
    if (voices.length) {
      resolve(voices)
      return
    }
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices()
      resolve(voices)
    }
  })
}

const chooseVoice = async () => {
  const voices = (await getVoices()).filter(voice => voice.lang == lang)

  return new Promise(resolve => {
    resolve(voices[voiceIndex])
  })
}

speak('Ciao')

// Multiple voices
// Any subsequent attempt to make a voice play after the first one is created will be queued in the utterance queue
