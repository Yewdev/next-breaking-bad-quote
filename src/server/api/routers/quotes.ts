import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { IQuote } from "~/types";

export const quotesRouter = createTRPCRouter({
  getQuote: publicProcedure.query(async () => {
    const { data } = await axios.get<IQuote[]>(
      "https://api.breakingbadquotes.xyz/v1/quotes"
    );
    return data[0];
  }),
});
