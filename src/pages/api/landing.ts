// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Details = {
  title: string;
  desc: string;
};

type Data = {
  title: string;
  subTitle: string;
  question: string;
  requirementDetails: Details[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const landingPagametas = {
      title: "최고의 실력을 가진 외국인 인재를 찾고 계신가요?",
      subTitle: "법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.",
      question: "개발자가 필요하신가요?",
      requirementDetails: [
        {
          title: "평균 월 120만원",
          desc: "임금을 해당 국가를 기준으로 계산합니다.",
        },
        {
          title: "최대 3회 인력교체",
          desc: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
        },
        {
          title: "평균 3일, 최대 10일",
          desc: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
        },
      ],
    };

    res.status(200).json(landingPagametas);
  } else {
    return res.status(405).end();
  }
}
