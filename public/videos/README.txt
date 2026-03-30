Put your demo .mp4 files in THIS folder (public/videos).

My Work demo videos:
  AI-Code review (1).mp4
  Nams-Bot.mp4
  Interactive_journaling_video.mp4 — AI-Journaling project (repo copy is compressed for GitHub <100 MB).
    To re-encode a large export locally (example):
    ffmpeg -y -i YOUR_BIG_FILE.mp4 -c:v libx264 -b:v 750k -maxrate 850k -bufsize 1700k -vf scale=960:-2 -c:a aac -b:a 96k -movflags +faststart -preset fast public/videos/Interactive_journaling_video.mp4

(Renames: update src/components/Work.tsx — videoDemoHref("...").)

Hero / About page (muted, autoplay when section is in view):
  Intro_video.mp4 (primary) or intro_video.mp4 — hero center
  Aboutme_video.mp4 — About section (left column beside copy)

After adding files, refresh the browser.
