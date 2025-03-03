export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="12" fill="#5a0103" />
      <path d="M25 70V30H35L50 60L65 30H75V70H65V45L55 65H45L35 45V70H25Z" fill="white" />
    </svg>
  )
}

