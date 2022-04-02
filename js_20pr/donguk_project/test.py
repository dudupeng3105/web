from youtube_transcript_api import YouTubeTranscriptApi
import json

srt = YouTubeTranscriptApi.get_transcript("mLzTo-y8Ef0")
for i in range(len(srt)):
  srt[i]['text'] = srt[i]['text'].replace("(","").replace(")","")
  srt[i] = json.dumps(srt[i])
with open("subtitles3.txt", "w") as f:
    for i in srt:
        f.write(",'{}'\n".format(i))