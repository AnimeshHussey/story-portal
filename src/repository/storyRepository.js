import { HttpNodeService } from "../service/HttpService";

export async function postStory(data) {
  try {
    const endpoint = `addStory`;
    return await HttpNodeService.post(endpoint, data).then(function (res) {
      return res.data;
    });
  } catch (error) {
    return {};
  }
}

export async function getStories(data) {
  try {
    const endpoint = `getAllStories`;
    return await HttpNodeService.get(endpoint).then(function (res) {
      return res.data;
    });
  } catch (error) {
    return {};
  }
}
