import { appLink } from "../utils/Utils";

const routes = {
  briefs: appLink + "/briefs",
  archive: appLink + "/archive",
  files: appLink + "/files",
  offers: appLink + "/offers",
  login: appLink + "/",
  briefForm: appLink + "/new-brief",
  offerForm: appLink + "/new-offer",
  brief: appLink + "/briefs/:id"
};

export default routes;
