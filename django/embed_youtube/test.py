from youtube_transcript_api import YouTubeTranscriptApi

srt = YouTubeTranscriptApi.get_transcript("mLzTo-y8Ef0")

with open("subtitles.txt", "w") as f:
    for i in srt:
        f.write("{}\n".format(i))