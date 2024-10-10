type Details = {
  title: string;
  desc: string;
};

type Metrics = {
  title: string;
  iconPath: string;
};

type Data = {
  title: string;
  subTitle: string;
  question: string;
  requirementDetails: Details[];
  metricsDetails: Metrics[];
};

type ContentProps = {
  data: Data | any;
};

export type { ContentProps };
