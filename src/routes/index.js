import { appLink } from "../utils/Utils";

const routes = {
  briefs: appLink + "/briefs",
  archive: appLink + "/archive",
  files: appLink + "/files",
  packets: appLink + "/packets",
  login: appLink + "/",
  form: appLink + "/form",
  brief: appLink + "/briefs/:id"
};

export default routes;
