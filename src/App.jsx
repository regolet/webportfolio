import './App.css'
import { useEffect, useState, useRef } from 'react'

// Theme toggle icons
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
)

// Social Icons
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

// Tool/Software Icons
const PhotoshopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01v3.36c.11.01.25.02.39.02.63 0 1.13-.16 1.5-.47.39-.33.58-.79.58-1.39 0-.52-.21-.93-.61-1.33zm-4.91-3.3h4.65c.51 0 .97.03 1.42.09.44.06.87.18 1.26.36.4.19.75.44 1.03.78.28.34.47.8.47 1.37 0 .71-.17 1.28-.52 1.71-.34.43-.82.75-1.42.97.81.19 1.43.54 1.85 1.06.42.52.63 1.17.63 1.94 0 .52-.1.99-.32 1.39-.21.4-.5.74-.87 1.01-.37.27-.79.47-1.28.6-.49.14-1 .2-1.52.2H4.94V5.12zm4.65 9.36c.39 0 .75-.05 1.09-.14.33-.1.61-.24.84-.44.24-.2.42-.44.55-.72.13-.28.19-.6.19-.98 0-.73-.23-1.25-.7-1.58-.47-.33-1.11-.5-1.91-.5-.26 0-.49 0-.66.01-.17 0-.32.01-.45.03v4.31c.15.01.34.01.56.01h.49zM19.75 0H4.25C1.9 0 0 1.9 0 4.25v15.5C0 22.1 1.9 24 4.25 24h15.5C22.1 24 24 22.1 24 19.75V4.25C24 1.9 22.1 0 19.75 0zm-3.41 8.26c-.52-.3-1.17-.45-1.95-.45-.39 0-.72.04-.98.1v6.73c.2.03.48.05.84.05.58 0 1.09-.09 1.54-.27.45-.18.83-.44 1.14-.77.31-.33.55-.74.71-1.21.16-.47.24-.99.24-1.57 0-.54-.08-1.02-.23-1.46-.15-.44-.38-.82-.68-1.15-.31-.31-.65-.55-1.07-.73.44.22.86.52 1.24.91.38.38.7.82.96 1.32.26.5.47 1.04.61 1.63.14.59.21 1.18.21 1.78 0 .78-.12 1.51-.36 2.17-.24.67-.58 1.24-1.03 1.72-.44.48-.98.86-1.61 1.13-.62.27-1.31.41-2.05.41-.74 0-1.48-.08-2.21-.24-.73-.16-1.37-.4-1.93-.7v-9.57c.67-.21 1.37-.37 2.1-.48.73-.11 1.49-.16 2.28-.16.73 0 1.39.08 2 .24.6.16 1.12.4 1.55.72.43.33.76.74 1 1.24.23.5.35 1.08.35 1.76 0 .59-.1 1.12-.3 1.6z"/>
  </svg>
)

const IllustratorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.22-.73-.08-.28-.18-.56-.28-.85zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v15.5c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 18.9h-2.55c-.07 0-.14-.05-.16-.12l-.82-2.49H7.47l-.74 2.47c-.02.08-.09.14-.17.14H4.2c-.11 0-.18-.1-.15-.2l3.85-11.48c.03-.09.06-.19.09-.3.04-.18.06-.39.06-.62 0-.04.03-.08.08-.08h3.16c.06 0 .1.03.12.08l4.35 12.4c.03.11-.04.2-.15.2h.09zm3.4 0c0 .07-.05.12-.12.12h-2.21c-.07 0-.12-.05-.12-.12V8.9c0-.07.05-.12.12-.12h2.21c.07 0 .12.05.12.12v10zm-.07-11.82c-.4.39-.9.58-1.49.58-.59 0-1.1-.19-1.5-.58-.4-.39-.6-.87-.6-1.45s.2-1.06.61-1.45c.4-.39.9-.58 1.49-.58.59 0 1.1.19 1.5.58.4.39.6.87.6 1.45s-.21 1.06-.61 1.45z"/>
  </svg>
)

const LightroomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v15.5c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM6.02 17.37c-.02.08-.09.13-.17.13H3.69c-.1 0-.18-.09-.15-.18l.03-.12V6.25c0-.09.07-.16.16-.16h2.09c.09 0 .16.07.16.16v8.49h4.09c.09 0 .16.07.16.16v1.99c0 .09-.07.16-.16.16H6.02zm13.9.03c-.02.07-.08.11-.15.11h-2.15c-.06 0-.11-.03-.14-.09l-.9-1.86c-.17-.34-.35-.69-.51-1.05h-.02c-.15.36-.31.72-.47 1.06l-.82 1.84c-.03.06-.08.1-.15.1h-2.06c-.08 0-.14-.08-.12-.16l2.66-5.02-2.54-4.8c-.04-.08.02-.17.11-.17h2.15c.06 0 .12.03.14.09l.84 1.77c.11.24.23.49.34.73.11.24.21.47.31.68h.03c.1-.22.2-.45.31-.68.11-.23.22-.47.33-.72l.79-1.78c.02-.05.08-.09.14-.09h2.02c.09 0 .15.09.11.17l-2.48 4.74 2.73 5.08c.02.05.02.1 0 .15z"/>
  </svg>
)

const CapCutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5h-3v-9h3v9zm6 0h-3V12l-1.5 2.25L10.5 12v4.5h-3v-9h3l1.5 2.25L13.5 7.5h3v9z"/>
  </svg>
)

const CanvaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.08c-.24 1.775-1.565 3.457-3.555 4.045-1.085.32-2.255.286-3.351-.1-.938-.33-1.792-.89-2.478-1.614-.686-.725-1.19-1.61-1.46-2.557-.34-1.193-.324-2.463.046-3.647.368-1.174 1.044-2.237 1.957-3.076.456-.42.972-.777 1.531-1.055.14-.07.28-.137.423-.197.286-.12.582-.213.885-.278 1.21-.26 2.486-.11 3.608.424.374.178.727.396 1.05.65.323.254.614.546.863.87.5.648.864 1.397 1.063 2.194.2.803.233 1.642.093 2.464-.14.823-.447 1.61-.896 2.31-.226.352-.489.681-.784.98-.147.15-.304.29-.469.42-.082.065-.167.127-.254.186-.175.118-.36.222-.553.312-.096.045-.195.086-.295.124-.2.075-.408.134-.62.177-.106.022-.213.04-.32.052-.215.024-.432.03-.649.017-.217-.013-.433-.045-.644-.095-.422-.1-.824-.273-1.189-.51-.183-.118-.355-.253-.513-.4-.158-.148-.302-.31-.43-.484-.257-.347-.46-.734-.598-1.146-.07-.207-.124-.42-.16-.637-.037-.217-.056-.438-.056-.66 0-.222.019-.443.056-.66.037-.217.09-.43.16-.637.14-.412.34-.8.598-1.146.128-.174.272-.336.43-.484.158-.147.33-.282.513-.4.365-.237.767-.41 1.189-.51.211-.05.427-.082.644-.095.217-.013.434-.007.649.017.107.012.214.03.32.052.212.043.42.102.62.177.1.038.199.079.295.124.193.09.378.194.553.312.087.059.172.121.254.186.165.13.322.27.469.42.295.299.558.628.784.98.449.7.756 1.487.896 2.31.07.411.099.83.086 1.25z"/>
  </svg>
)

const SketchUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 2.18l8.25 4.72v1.92L12 13.54l-8.25-4.72V6.9L12 2.18zm-8.25 7.5l7.13 4.08v7.06l-7.13-4.08v-7.06zm9.37 11.14v-7.06l7.13-4.08v7.06l-7.13 4.08z"/>
  </svg>
)

const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 5.5v-2M12 20.5v-2M5.5 12h-2M20.5 12h-2M7.05 7.05L5.64 5.64M18.36 18.36l-1.41-1.41M7.05 16.95l-1.41 1.41M18.36 5.64l-1.41 1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

// Additional Tools Icons
const MicrosoftOfficeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.53 4.306v15.363q0 .807-.472 1.433-.472.627-1.253.85l-6.888 1.974q-.136.037-.29.055-.156.019-.293.019-.396 0-.72-.105-.321-.106-.656-.292l-4.505-2.544q-.248-.137-.391-.137-.348 0-.348.348v.044q0 .248.154.372l1.36.916q.156.106.156.292 0 .348-.348.348H2.174q-.348 0-.348-.348V6.789q0-.348.348-.348h2.97q.348 0 .348.348 0 .186-.156.292l-1.36.916q-.154.124-.154.372v.044q0 .348.348.348.143 0 .391-.137l4.505-2.544q.335-.186.656-.292.324-.105.72-.105.137 0 .293.019.154.018.29.055l6.888 1.974q.78.223 1.253.85.472.626.472 1.433zM6.24 6.79v10.394l7.57 2.192V4.598z"/>
  </svg>
)

const NotionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.063 2.17c-.466-.373-.934-.652-1.96-.56l-12.78.933c-.467.047-.56.28-.374.466zm.793 2.939v13.728c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.166V6.054c0-.606-.234-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.839zm14.337.746c.094.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.22.187c-.094-.187 0-.654.327-.747l.84-.233V9.854L7.38 9.714c-.094-.42.14-1.026.793-1.073l3.454-.233 4.763 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.197 1.614l13.4-.98c1.634-.14 2.054-.047 3.082.7l4.25 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.961-.747l-3.127-4.06c-.56-.747-.793-1.306-.793-1.96V3.293c0-.84.374-1.54 1.354-1.68z"/>
  </svg>
)

const HubstaffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6v2M12 16v2M6 12h2M16 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const SlackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.52 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.124a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.521-2.52v-2.522h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.52 2.521h-6.314z"/>
  </svg>
)

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime = null
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <span ref={countRef}>{count}{suffix}</span>
}

// Skill Progress Bar Component
const SkillBar = ({ skill, level, delay = 0, icon: Icon }) => {
  const [isVisible, setIsVisible] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.5 }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div className="skill-bar-container" ref={barRef}>
      <div className="skill-bar-header">
        <div className="skill-name-with-icon">
          {Icon && <span className="skill-icon"><Icon /></span>}
          <span className="skill-name">{skill}</span>
        </div>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) return savedTheme
    }
    return 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('.section')
    const portfolioItems = document.querySelectorAll('.portfolio-item')

    sections.forEach(section => observer.observe(section))
    portfolioItems.forEach(item => observer.observe(item))

    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]')
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })

    return () => {
      sections.forEach(section => observer.unobserve(section))
      portfolioItems.forEach(item => observer.unobserve(item))
    }
  }, [])

  // Skills data with icons
  const skills = [
    { name: 'Network Administration', level: 90, icon: AIIcon },
    { name: 'ISP/WISP Operations', level: 90, icon: HubstaffIcon },
    { name: 'Ubiquiti Products & Wireless Links', level: 92, icon: SketchUpIcon },
    { name: 'Systems Support', level: 92, icon: MicrosoftOfficeIcon },
    { name: 'Firewall & Antivirus Administration', level: 85, icon: HubstaffIcon },
    { name: 'Hardware Servicing & PC Repair', level: 90, icon: SketchUpIcon },
    { name: 'User Account & Email Management', level: 88, icon: NotionIcon },
    { name: 'Remote Troubleshooting', level: 90, icon: SlackIcon },
    { name: 'Basic Linux & Cybersecurity Response', level: 78, icon: CapCutIcon },
    { name: 'IT Documentation & Reporting', level: 86, icon: CanvaIcon },
    { name: 'Basic HTML/Web Development', level: 75, icon: IllustratorIcon },
    { name: 'Multimedia & Graphics Support', level: 82, icon: PhotoshopIcon },
    { name: 'Photo and Visual Asset Editing', level: 78, icon: LightroomIcon }
  ]

  const experiences = [
    {
      role: 'Owner / ISP & WISP Operator',
      company: 'FRGS IT Solutions',
      period: '2021 - Present',
      location: 'Malita, Davao Occidental, Philippines',
      highlights: [
        'Operate and manage ISP/WISP services, including wireless network planning, installation, monitoring, and customer support.',
        'Deploy, configure, and troubleshoot Ubiquiti products for wireless links, access points, customer premises equipment, and network distribution.',
        'Maintain service reliability by diagnosing connectivity issues, optimizing signal quality, managing devices, and responding to outages.'
      ]
    },
    {
      role: 'IT Specialist / MIS',
      company: 'Davao Famous Bakery Foods Inc. / Pizza Pedricos / Xantino\'s Pizza',
      period: 'June 2020 - Present',
      location: 'Davao Region, Philippines',
      highlights: [
        'Monitor and maintain CCTV, telephone systems, business networks, workstations, and internet-sharing performance.',
        'Install and configure operating systems, office applications, email browsers, peripherals, and workstation settings.',
        'Administer MIS operations, antivirus systems, user accounts, passwords, computer inventory, and audit reports.'
      ]
    },
    {
      role: 'IT Specialist / Staff',
      company: 'ASIAPRO Multi-Purpose Cooperative / TNALAK Labor Service Cooperative',
      period: 'January 2017 - March 2020',
      location: 'Davao Region, Philippines',
      highlights: [
        'Maintained computer systems, networks, firewall policies, backups, user access, and cooperative information systems.',
        'Supported IFOMS, data migration, active user reviews, workstation specifications, and technical service requests.',
        'Delivered remote and on-site branch support for departments and associate company locations.'
      ]
    },
    {
      role: 'IT / Encoder',
      company: 'San Miguel Consolidated Power Corporation',
      period: 'July 2016 - January 2017',
      location: 'Malita, Davao Occidental',
      highlights: [
        'Troubleshot printers, computers, and network issues for the main office while supporting ISO documentation.',
        'Created an ISO file management website and assisted departments with multimedia and document production.'
      ]
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar glass-effect">
        <div className="nav-container">
          <div className="nav-brand">
            <a href="#home" className="logo">Rego Mongosera</a>
            <span className="nav-badge"><span className="status-dot"></span>Available for IT Roles</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="/Rego-Kier-Mongosera-IT-Network-Administrator-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>
            </li>
          </ul>
          <button
            className="theme-toggle mobile-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-gradient"></div>
        <div className="hero-content">
          <img
            src="/images/profile/profile.jpg"
            alt="Rego Kier Mongosera Profile"
            className="hero-profile-image"
          />
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Rego Kier Mongosera</span>
          </h1>
          <p className="subtitle">IT Network Administrator, ISP/WISP Operator & Ubiquiti Specialist</p>
          <p className="description">
            IT professional with 8+ years of experience maintaining networks, computer systems, user accounts,
            endpoint security, CCTV, telephony, MIS operations, and wireless internet infrastructure.
          </p>

          {/* Social Links */}
          <div className="social-links">
            <a href="mailto:mongosera@gmail.com" className="social-link" aria-label="Email">
              <EmailIcon />
            </a>
            <a href="https://www.linkedin.com/in/rego-kier-mongosera-426a6822b/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://fb.com/regolet" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/rkmongosera/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>

          <div className="hero-cta">
            <a href="#experience" className="cta-button primary">View Experience</a>
            <a href="/Rego-Kier-Mongosera-IT-Network-Administrator-Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button secondary">Download Resume</a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* Professional Focus Section */}
      <section className="trusted-by-section">
        <div className="container">
          <p className="trusted-by-label">Supporting reliable IT operations, wireless connectivity, and ISP/WISP service delivery</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card glass-card">
              <div className="stat-number">
                <AnimatedCounter end={8} suffix="+" />
              </div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">
                <AnimatedCounter end={4} suffix="+" />
              </div>
              <div className="stat-label">Years ISP/WISP</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">
                <AnimatedCounter end={4} suffix="" />
              </div>
              <div className="stat-label">IT Organizations</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">
                <AnimatedCounter end={350} suffix="+" />
              </div>
              <div className="stat-label">Training Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content-text-only">
            <div className="about-text">
              <p>
                I'm Rego Kier Mongosera, an IT specialist focused on keeping networks, workstations, user access,
                business systems, wireless internet services, and security tools available and performing reliably. I own
                FRGS IT Solutions, where I operate ISP/WISP services and work extensively with Ubiquiti products.
              </p>
              <p>
                <strong>Professional focus areas:</strong>
              </p>
              <div className="platform-cards">
                <div className="platform-card"><span className="platform-name">Network Operations</span><span className="platform-desc">LAN, internet sharing, firewall, CCTV, telephony</span></div>
                <div className="platform-card"><span className="platform-name">ISP/WISP Operations</span><span className="platform-desc">Wireless links, CPE, AP deployment, customer connectivity</span></div>
                <div className="platform-card"><span className="platform-name">Ubiquiti Expertise</span><span className="platform-desc">Device configuration, troubleshooting, monitoring, optimization</span></div>
                <div className="platform-card"><span className="platform-name">Systems Administration</span><span className="platform-desc">MIS, workstations, backups, accounts, email</span></div>
                <div className="platform-card"><span className="platform-name">End-User Support</span><span className="platform-desc">Remote helpdesk, repairs, installations, inventory</span></div>
                <div className="platform-card"><span className="platform-name">Security & Compliance</span><span className="platform-desc">Antivirus, USB scanning, user reviews, audit reports</span></div>
              </div>

              {/* Skills with Progress Bars */}
              <div className="skills-section">
                <h4 className="skills-title">Skills & Expertise</h4>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill.name}
                      level={skill.level}
                      delay={index * 100}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>

              <div className="tools-section">
                <h5 className="tools-title">Additional Tools & Platforms</h5>
                <div className="tools-grid">
                  <span className="tool-tag">
                    <span className="tool-icon"><MicrosoftOfficeIcon /></span>
                    Microsoft Office
                  </span>
                  <span className="tool-tag">
                    <span className="tool-icon"><NotionIcon /></span>
                    Notion
                  </span>
                  <span className="tool-tag">
                    <span className="tool-icon"><HubstaffIcon /></span>
                    Hubstaff
                  </span>
                  <span className="tool-tag">
                    <span className="tool-icon"><SlackIcon /></span>
                    Slack
                  </span>
                </div>
              </div>

              <p>
                I bring a practical, service-oriented approach to IT: diagnose quickly, document clearly,
                protect systems, and keep users productive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-timeline">
            {experiences.map((experience) => (
              <article className="experience-card glass-card" key={`${experience.role}-${experience.period}`}>
                <div className="experience-header">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="experience-company">{experience.company}</p>
                    <p className="experience-location">{experience.location}</p>
                  </div>
                  <span className="experience-period">{experience.period}</span>
                </div>
                <ul className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="resume-download-card glass-card">
            <div>
              <h3>Download the Full Resume</h3>
              <p>Includes detailed skills, education, certifications, training, and additional IT support experience.</p>
            </div>
            <a href="/Rego-Kier-Mongosera-IT-Network-Administrator-Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button primary">Open PDF</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <div className="contact-item">
                <EmailIcon />
                <span>mongosera@gmail.com</span>
              </div>
              <div className="contact-item">
                <span>Available for IT network administration, ISP/WISP, and systems support roles</span>
              </div>
              <div className="contact-item">
                <span>Philippines</span>
              </div>
              <div className="contact-item">
                <a href="/Rego-Kier-Mongosera-IT-Network-Administrator-Resume.pdf"
                   target="_blank"
                   rel="noopener noreferrer">
                  View Resume PDF
                </a>
              </div>
              <div className="contact-specializations">
                <strong>Specializations:</strong>
                <ul>
                  <li>Network administration and maintenance</li>
                  <li>ISP/WISP operations and Ubiquiti products</li>
                  <li>Systems, hardware, and peripheral support</li>
                  <li>Firewall, antivirus, and backup administration</li>
                  <li>User account, email, and remote support</li>
                </ul>
              </div>
            </div>

            <form className="contact-form glass-card">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about the role or IT support need..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Rego Kier Mongosera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
