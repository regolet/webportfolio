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
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
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

  // Portfolio items with categories
  const portfolioItems = [
    {
      id: 'benafique',
      title: 'Minimalist Digital Portraits',
      description: 'Custom minimalist digital portraits created for Benafique, one of the best-selling digital portrait platforms online.',
      image: '/images/benafique/134666866_154818629756655_8162675739851721615_n.jpg',
      tags: ['Digital Portraits', 'Minimalist Style', 'Photoshop'],
      category: 'portraits',
      hasGallery: true,
      featured: true
    },
    {
      id: 'crownandpaw',
      title: 'Custom Pet Portraits',
      description: 'Professional pet portrait artwork created for Crown and Paw, transforming beloved pets into stunning digital art pieces.',
      image: '/images/crownandpaw/Renaissance_Collection_4_500x.webp',
      tags: ['Pet Portraits', 'Photo Editing', 'Crown and Paw'],
      category: 'pet-art',
      hasGallery: true,
      featured: true
    },
    {
      id: 'masterpieceme',
      title: 'Renaissance Style Portraits',
      description: 'Elegant renaissance-style portraits created for Masterpiece Me, combining classical art aesthetics with modern digital techniques.',
      image: '/images/masterpieceme/TheArcherBG3-CanvasonFloor_300x.avif',
      tags: ['Renaissance Art', 'Classical Style', 'Masterpiece Me'],
      category: 'renaissance',
      hasGallery: true,
      featured: true
    },
    {
      id: 'tellmytale',
      title: 'Tell My Tale - Story Visualizations',
      description: 'Creative visual storytelling and graphic design work for Tell My Tale platform.',
      image: '/images/tellmytale/BookMockup_6-I.webp',
      tags: ['Story Visualization', 'Creative Design', 'Tell My Tale'],
      category: 'illustration',
      hasGallery: true
    },
    {
      id: 'tailoredcanvases',
      title: 'Tailored Canvases - Custom Artwork',
      description: 'Specialized custom canvas artwork and visual designs that capture unique artistic visions.',
      image: '/images/tailoredcanvases/1_2_1_large.webp',
      tags: ['Custom Canvases', 'Personalized Art', 'Creative Design'],
      category: 'custom',
      hasGallery: true
    },
    {
      id: 'wonderme',
      title: 'Wonder Me - Creative Artwork',
      description: 'Imaginative and personalized designs created for Wonder Me platform.',
      image: '/images/wonderme/TheMermaid_1.webp',
      tags: ['Wonder Me', 'Creative Design', 'Fantasy Art'],
      category: 'illustration',
      hasGallery: true
    },
    {
      id: 'planetart',
      title: 'PlanetArt - Photo Gifts & Personalization',
      description: 'Professional photo editing and personalized product designs for PlanetArt and its subsidiary brands including SimplyToImpress, PhotoAffections, MyCustomCase, CanvasWorld, and PersonalCreations.',
      image: '/images/planetart/planetart.webp',
      tags: ['Photo Gifts', 'Personalization', 'PlanetArt'],
      category: 'photo-gifts',
      hasGallery: true,
      featured: true
    },
    {
      id: '3d-modeling',
      title: '3D Modeling & Design',
      description: 'Architectural and product visualizations created using SketchUp.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
      tags: ['3D Modeling', 'SketchUp', 'Visualization'],
      category: '3d',
      hasGallery: false
    },
    {
      id: 'photo-manipulation',
      title: 'Advanced Photo Manipulation',
      description: 'Complex photo editing and manipulation projects demonstrating expertise in color correction and compositing.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=400&fit=crop',
      tags: ['Photo Editing', 'Manipulation', 'Color Grading'],
      category: 'editing',
      hasGallery: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'pet-art', label: 'Pet Art' },
    { id: 'renaissance', label: 'Renaissance' },
    { id: 'illustration', label: 'Illustration' },
    { id: 'custom', label: 'Custom Art' },
    { id: 'photo-gifts', label: 'Photo Gifts' }
  ]

  const filteredPortfolio = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  // Gallery data
  const galleries = {
    benafique: {
      title: "Benafique Portfolio Gallery",
      description: "A showcase of my digital portrait work created for Benafique platform, demonstrating various artistic styles and professional quality.",
      images: [
        { src: "/images/benafique/134666866_154818629756655_8162675739851721615_n.jpg", alt: "Benafique Portrait 1" },
        { src: "/images/benafique/134756959_154610896444095_8743057965242909823_n.jpg", alt: "Benafique Portrait 2" },
        { src: "/images/benafique/135179539_154818619756656_1347774845674547771_n.jpg", alt: "Benafique Portrait 3" },
        { src: "/images/benafique/135201875_154818656423319_7013189573141210360_n.jpg", alt: "Benafique Portrait 4" },
        { src: "/images/benafique/135307113_154818646423320_7022759632052491225_n.jpg", alt: "Benafique Portrait 5" },
        { src: "/images/benafique/136825798_162690138969504_1081430040988676386_n.jpg", alt: "Benafique Portrait 6" },
        { src: "/images/benafique/137535221_162696985635486_7530847570235496342_n.jpg", alt: "Benafique Portrait 7" },
        { src: "/images/benafique/138192697_164064458832072_4617485151502914369_n.jpg", alt: "Benafique Portrait 8" },
        { src: "/images/benafique/138825097_164060538832464_7100779006894881816_n.jpg", alt: "Benafique Portrait 9" },
        { src: "/images/benafique/139936781_166421318596386_8495543106502574344_n.jpg", alt: "Benafique Portrait 10" }
      ]
    },
    crownandpaw: {
      title: "Crown and Paw Portfolio Gallery",
      description: "A collection of custom pet portraits created for Crown and Paw.",
      images: [
        { src: "/images/crownandpaw/Renaissance_Collection_4_500x.webp", alt: "Renaissance Pet Portrait" },
        { src: "/images/crownandpaw/TheAristocrat2_8c8edd56-f1b4-46ed-9aba-547b4197dcda_375x.jpg", alt: "Aristocrat Pet Portrait" },
        { src: "/images/crownandpaw/pet_portrait_military_outfit_veteran_375x.webp", alt: "Military Pet Portrait" },
        { src: "/images/crownandpaw/atlas.aries.aussies_375x.webp", alt: "Australian Shepherd Portrait" },
        { src: "/images/crownandpaw/beatricemgolden_123721522_383477622844716_9103325890636000004_n_375x.jpg", alt: "Golden Retriever Portrait" },
        { src: "/images/crownandpaw/crownandpaw_109844584_1200002630342874_1492102714399702302_n_375x.jpg", alt: "Crown and Paw Featured Work" },
        { src: "/images/crownandpaw/iggy.coco_f01a3c16-73e3-4818-9a87-a0eb6a7fcfeb_375x.webp", alt: "Iggy Coco Pet Portrait" },
        { src: "/images/crownandpaw/talk_to_the_paw_98157855_566356017590475_725091166907302331_n_375x.webp", alt: "Talk to the Paw Design" },
        { src: "/images/crownandpaw/thegoldenlifeof2_375x.webp", alt: "Golden Life Pet Portrait" },
        { src: "/images/crownandpaw/KuboTheGeneral_375x.webp", alt: "Kubo The General Portrait" }
      ]
    },
    masterpieceme: {
      title: "Masterpiece Me Portfolio Gallery",
      description: "A collection of renaissance-style portraits and classical artwork.",
      images: [
        { src: "/images/masterpieceme/TheArcherBG3-CanvasonFloor_300x.avif", alt: "The Archer Renaissance Portrait" },
        { src: "/images/masterpieceme/TheDwarfBG4-CanvasonFloor_300x.avif", alt: "The Dwarf Classical Portrait" },
        { src: "/images/masterpieceme/TheSwordsmanBG4-CanvasonFloor_300x.avif", alt: "The Swordsman Renaissance Art" },
        { src: "/images/masterpieceme/TheWhiteSorcererBG1-CanvasonFloor_300x.avif", alt: "The White Sorcerer Portrait" },
        { src: "/images/masterpieceme/TheStepBrothersPosterMockUp_300x.avif", alt: "The Step Brothers Poster" },
        { src: "/images/masterpieceme/145563982_1152554785181571_5536826764487585550_n_300x.avif", alt: "Masterpiece Me Featured Work" },
        { src: "/images/masterpieceme/divineindc_118286570_335551904292831_2863370620445534766_n_300x.avif", alt: "Divine DC Renaissance Portrait" },
        { src: "/images/masterpieceme/homesweethazel_113058249_122380609250351_4347520818081672827_n_300x.avif", alt: "Home Sweet Hazel Portrait" },
        { src: "/images/masterpieceme/mar.torosian_118167732_228170102050720_7309799743468610605_n_300x.avif", alt: "Mar Torosian Classical Portrait" },
        { src: "/images/masterpieceme/sonia.zubareva_102812657_4460477710644608_8846720010770244238_n_300x.avif", alt: "Sonia Zubareva Renaissance Art" }
      ]
    },
    tellmytale: {
      title: "Tell My Tale Portfolio Gallery",
      description: "Story visualizations and book designs.",
      images: [
        { src: "/images/tellmytale/BookMockup_6-I.webp", alt: "Tell My Tale Book Mockup" },
        { src: "/images/tellmytale/Book_Mockup_3.2-AA_1.webp", alt: "Animal Adventure Book Design" },
        { src: "/images/tellmytale/TMT_anima_l_adventure_Boy.webp", alt: "Animal Adventure Character Design" },
        { src: "/images/tellmytale/Romy-AnimalAdventure.webp", alt: "Romy Animal Adventure Story" },
        { src: "/images/tellmytale/banner_2.webp", alt: "Tell My Tale Banner Design" },
        { src: "/images/tellmytale/2.webp", alt: "Tell My Tale Story Illustration" }
      ]
    },
    tailoredcanvases: {
      title: "Tailored Canvases Portfolio Gallery",
      description: "Custom canvas artwork and personalized designs.",
      images: [
        { src: "/images/tailoredcanvases/1_2_1_large.webp", alt: "Custom Canvas Design 1" },
        { src: "/images/tailoredcanvases/1_b85d7d2b-b968-42e3-adcd-231cfe8d244a_1_large.webp", alt: "Custom Canvas Design 2" },
        { src: "/images/tailoredcanvases/2_1778fabd-d109-45d2-b42c-0aaf0bd9ab51_1_large.webp", alt: "Custom Canvas Design 3" },
        { src: "/images/tailoredcanvases/v1_1_2a2e91c0-87e0-4c70-89c5-c117affbb5cd_large.webp", alt: "Tailored Canvas Artwork" }
      ]
    },
    wonderme: {
      title: "Wonder Me Portfolio Gallery",
      description: "Creative and personalized artwork.",
      images: [
        { src: "/images/wonderme/1_6.webp", alt: "Wonder Me Creative Design 1" },
        { src: "/images/wonderme/2_5.webp", alt: "Wonder Me Creative Design 2" },
        { src: "/images/wonderme/BatelAd-IMG1_aea88fbd-d8e6-4c84-96fe-06f15e71fc59.webp", alt: "Batel Advertisement Design 1" },
        { src: "/images/wonderme/BatelAd-IMG2_7fd04ff5-347f-4e0e-85dc-41fce4e8e627.webp", alt: "Batel Advertisement Design 2" },
        { src: "/images/wonderme/RachelEdel-IMG4.webp", alt: "Rachel Edel Custom Design" },
        { src: "/images/wonderme/TheMermaid_1.webp", alt: "The Mermaid Artwork 1" },
        { src: "/images/wonderme/TheMermaid_2.webp", alt: "The Mermaid Artwork 2" },
        { src: "/images/wonderme/WM-1004-A_35729df3-cff5-4b93-887b-ff513fc1d65b.webp", alt: "Wonder Me Design WM-1004-A" },
        { src: "/images/wonderme/WM-1004-B_5bbfa436-96a0-4f93-9558-87bc341f2426.webp", alt: "Wonder Me Design WM-1004-B" },
        { src: "/images/wonderme/WM-1011A.webp", alt: "Wonder Me Design WM-1011A" }
      ]
    },
    planetart: {
      title: "PlanetArt Portfolio Gallery",
      description: "Photo gifts and personalized product designs for PlanetArt and its subsidiary brands.",
      images: [
        { src: "/images/planetart/planetart.webp", alt: "PlanetArt Photo Gift Design" }
      ]
    }
  }

  const openGallery = (galleryType) => {
    if (galleries[galleryType]) {
      setSelectedGallery(galleryType)
      setIsGalleryOpen(true)
    }
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setSelectedGallery(null)
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

    const navLinks = document.querySelectorAll('.nav-links a')
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
    { name: 'Adobe Photoshop', level: 90, icon: PhotoshopIcon },
    { name: 'Adobe Illustrator', level: 80, icon: IllustratorIcon },
    { name: 'Adobe Lightroom', level: 70, icon: LightroomIcon },
    { name: 'CapCut Video Editing', level: 80, icon: CapCutIcon },
    { name: 'Canva Design', level: 90, icon: CanvaIcon },
    { name: 'SketchUp 3D', level: 70, icon: SketchUpIcon },
    { name: 'AI Image Generation', level: 80, icon: AIIcon }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar glass-effect">
        <div className="nav-container">
          <div className="nav-brand">
            <a href="#home" className="logo">Rego Mongosera</a>
            <span className="nav-badge"><span className="status-dot"></span>Available for Freelance</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
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
          <p className="subtitle">Professional Graphic Artist & Digital Portrait Specialist</p>
          <p className="description">
            With 8 years of experience in graphic design, I specialize in creating stunning digital portraits,
            custom pet portraits, and renaissance-style artwork. I'm passionate about bringing creative visions to life.
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
            <a href="#portfolio" className="cta-button primary">Explore My Work</a>
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

      {/* Trusted By Section */}
      <section className="trusted-by-section">
        <div className="container">
          <p className="trusted-by-label">Trusted by leading companies</p>
          <div className="trusted-by-carousel">
            <div className="carousel-track">
              <img src="/images/companies/22.avif" alt="Benafique" className="company-logo" />
              <img src="/images/companies/Crown-and-Paw-Black-Trademark-Logo_145x.webp" alt="Crown and Paw" className="company-logo" />
              <img src="/images/companies/Masterpiece_Me_Wax_Logo_Cropped_500x.avif" alt="Masterpiece Me" className="company-logo" />
              <img src="/images/companies/TEllmyTale_Logo_wide_1.avif" alt="Tell My Tale" className="company-logo" />
              <img src="/images/companies/WONDER_ME_LOGO.avif" alt="Wonder Me" className="company-logo" />
              <img src="/images/companies/planetart-1720559646.svg" alt="PlanetArt" className="company-logo" />
              <img src="/images/companies/photoaffections-logo-13-highres.png" alt="PhotoAffections" className="company-logo" />
              <img src="/images/companies/personalcreation.png" alt="Personal Creations" className="company-logo" />
              <img src="/images/companies/logo7.png" alt="Tailored Canvases" className="company-logo" />
              {/* Duplicate for seamless loop */}
              <img src="/images/companies/22.avif" alt="Benafique" className="company-logo" />
              <img src="/images/companies/Crown-and-Paw-Black-Trademark-Logo_145x.webp" alt="Crown and Paw" className="company-logo" />
              <img src="/images/companies/Masterpiece_Me_Wax_Logo_Cropped_500x.avif" alt="Masterpiece Me" className="company-logo" />
              <img src="/images/companies/TEllmyTale_Logo_wide_1.avif" alt="Tell My Tale" className="company-logo" />
              <img src="/images/companies/WONDER_ME_LOGO.avif" alt="Wonder Me" className="company-logo" />
              <img src="/images/companies/planetart-1720559646.svg" alt="PlanetArt" className="company-logo" />
              <img src="/images/companies/photoaffections-logo-13-highres.png" alt="PhotoAffections" className="company-logo" />
              <img src="/images/companies/personalcreation.png" alt="Personal Creations" className="company-logo" />
              <img src="/images/companies/logo7.png" alt="Tailored Canvases" className="company-logo" />
            </div>
          </div>
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
                <AnimatedCounter end={1000} suffix="+" />
              </div>
              <div className="stat-label">Orders Completed</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">
                <AnimatedCounter end={5} suffix="★" />
              </div>
              <div className="stat-label">Client Rating</div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-number">
                <AnimatedCounter end={12} suffix="" />
              </div>
              <div className="stat-label">Clients</div>
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
                I'm Rego Kier Mongosera, a dedicated graphic artist with 8 years of professional experience
                specializing in digital portraits and photo manipulation. I've had the privilege of working with
                multiple leading online portrait companies, creating thousands of custom artworks for clients worldwide.
              </p>
              <p>
                <strong>Platforms I've worked with:</strong>
              </p>
              <div className="platform-cards">
                <a href="https://benafique.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">Benafique.com</span>
                  <span className="platform-desc">Minimalist digital portraits</span>
                </a>
                <a href="https://crownandpaw.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">CrownandPaw.com</span>
                  <span className="platform-desc">Custom pet portraits</span>
                </a>
                <a href="https://masterpieceme.co" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">MasterpieceMe.co</span>
                  <span className="platform-desc">Renaissance portraits</span>
                </a>
                <a href="https://tellmytale.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">TellMyTale.com</span>
                  <span className="platform-desc">Story visualizations</span>
                </a>
                <a href="https://wonderme.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">WonderMe.com</span>
                  <span className="platform-desc">Custom artwork</span>
                </a>
                <a href="https://planetart.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">PlanetArt.com</span>
                  <span className="platform-desc">Photo gifts & personalized products</span>
                </a>
                <a href="https://simplytoimpress.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">SimplyToImpress.com</span>
                  <span className="platform-desc">Personalized stationery & cards</span>
                </a>
                <a href="https://photoaffections.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">PhotoAffections.com</span>
                  <span className="platform-desc">Custom photo products</span>
                </a>
                <a href="https://mycustomcase.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">MyCustomCase.com</span>
                  <span className="platform-desc">Personalized phone cases</span>
                </a>
                <a href="https://canvasworld.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">CanvasWorld.com</span>
                  <span className="platform-desc">Canvas prints & wall art</span>
                </a>
                <a href="https://personalcreations.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">PersonalCreations.com</span>
                  <span className="platform-desc">Personalized gifts</span>
                </a>
                <a href="https://tailoredcanvases.com" target="_blank" rel="noopener noreferrer" className="platform-card">
                  <span className="platform-name">TailoredCanvases.com</span>
                  <span className="platform-desc">Custom canvas artwork</span>
                </a>
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
                I pride myself on delivering high-quality services with keen attention to detail, consistently
                earning 5-star ratings from clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title">My Portfolio</h2>

          {/* Filter Buttons */}
          <div className="portfolio-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredPortfolio.map((item, index) => (
              <div
                key={`${activeFilter}-${item.id}`}
                className={`portfolio-item glass-card ${item.featured ? 'featured' : ''}`}
                onClick={() => item.hasGallery && openGallery(item.id)}
                style={{
                  cursor: item.hasGallery ? 'pointer' : 'default',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {item.featured && <div className="featured-badge">Featured</div>}
                <div className="portfolio-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-image"
                  />
                  <div className="portfolio-overlay">
                    <span>{item.hasGallery ? 'View Gallery' : 'View Details'}</span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                  <div className="portfolio-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  {item.hasGallery && (
                    <div className="view-gallery-btn">Click to View Gallery</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {isGalleryOpen && selectedGallery && (
        <div className="gallery-modal-overlay" onClick={closeGallery}>
          <div className="gallery-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-modal-header">
              <h2>{galleries[selectedGallery].title}</h2>
              <button className="close-button" onClick={closeGallery}>×</button>
            </div>
            <p className="gallery-modal-description">{galleries[selectedGallery].description}</p>
            <div className="gallery-modal-grid">
              {galleries[selectedGallery].images.map((image, index) => (
                <div key={index} className="gallery-modal-item">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <div className="contact-item">
                <EmailIcon />
                <span>mongosera@gmail.com</span>
              </div>
              <div className="contact-item">
                <span>Available for freelance projects</span>
              </div>
              <div className="contact-item">
                <span>Philippines</span>
              </div>
              <div className="contact-item">
                <a href="https://drive.google.com/drive/folders/1JxCWQT6oNLnxweHTFq0q7Jx3-1adSB87?usp=sharing"
                   target="_blank"
                   rel="noopener noreferrer">
                  View Portfolio Drive
                </a>
              </div>
              <div className="contact-specializations">
                <strong>Specializations:</strong>
                <ul>
                  <li>Digital Portraits & Illustrations</li>
                  <li>Photo Editing & Manipulation</li>
                  <li>Adobe Creative Suite</li>
                  <li>AI Image Generation</li>
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
                  placeholder="Tell me about your project..."
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
          <p>&copy; 2024 Rego Kier Mongosera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
