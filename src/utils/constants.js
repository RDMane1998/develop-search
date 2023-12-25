const API_KEY = "AIzaSyB9rVX4lVRtztb02TbM4WsNxmGLVnx4bTQ";

export const Video_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=" +
  API_KEY;

export const Search_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  API_KEY +
  "&q=";
