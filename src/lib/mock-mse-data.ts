// =============================================================================
// Orange News — MSE Mock Fallback Data
// =============================================================================
// Used by fetch-mse-data.ts when the live mse_data.json is unreachable or
// malformed. Values sampled from the 2026-05-03 manual-dispatch snapshot —
// realistic prices and tickers, abbreviated row counts to keep bundle small.
//
// Pattern: sibling to mock-market-data.ts (mirrors the mock-X.ts ↔ fetch-X.ts
// convention).
// =============================================================================

import type { MseDataResult } from "./types";

type MockMseData = Omit<MseDataResult, "source" | "fetchedAt" | "error">;

export const MOCK_MSE_DATA: MockMseData = {
  marquee: [
    { symbol: "MSE", price: 320.49, changePct: 0.04, changeAbs: 0.14, direction: "up" },
    { symbol: "APU", price: 937.0, changePct: 0.1, changeAbs: 0.95, direction: "up" },
    { symbol: "TDB", price: 16000.0, changePct: 0.0, changeAbs: 0.0, direction: "flat" },
    { symbol: "TTL", price: 30000.0, changePct: 0.07, changeAbs: 20.0, direction: "up" },
    { symbol: "SUU", price: 660.0, changePct: 0.12, changeAbs: 0.81, direction: "up" },
    { symbol: "MBG", price: 16.1, changePct: 15.0, changeAbs: 2.1, direction: "up" },
    { symbol: "SHV", price: 2865.0, changePct: -4.5, changeAbs: -135.0, direction: "down" },
    { symbol: "KHAN", price: 1349.0, changePct: 1.43, changeAbs: 19.0, direction: "up" },
  ],
  stockAmount: [
    { symbol: "KHAN", name: "Хаан банк ХК", code: 563, logoUrl: "", amountMnt: 262371826, changePct: 1.43, changeAbs: 19.0, direction: "up", price: 1349.0 },
    { symbol: "APU", name: "АПУ ХК", code: 12, logoUrl: "", amountMnt: 198450000, changePct: 0.1, changeAbs: 0.95, direction: "up", price: 937.0 },
    { symbol: "TDB", name: "Худалдаа Хөгжлийн банк ХК", code: 880, logoUrl: "", amountMnt: 152800000, changePct: 0.0, changeAbs: 0.0, direction: "flat", price: 16000.0 },
  ],
  stockUp: [
    { symbol: "MBG", name: "Булигаар ХК", code: 38, logoUrl: "", price: 16.1, changePct: 15.0, changeAbs: 2.1, direction: "up" },
    { symbol: "MNP", name: "Монгол Шуудан ХК", code: 504, logoUrl: "", price: 579.0, changePct: 5.97, changeAbs: 32.6, direction: "up" },
    { symbol: "MLG", name: "Монголын цахилгаан холбоо ХК", code: 503, logoUrl: "", price: 168.99, changePct: 4.96, changeAbs: 7.99, direction: "up" },
  ],
  stockDown: [
    { symbol: "ADU", name: "Хөвсгөл алтан дуулга ХК", code: 402, logoUrl: "", price: 275.0, changePct: -9.84, changeAbs: -30.0, direction: "down" },
    { symbol: "SHV", name: "Шарын гол ХК", code: 681, logoUrl: "", price: 2865.0, changePct: -4.5, changeAbs: -135.0, direction: "down" },
    { symbol: "AIC", name: "Ай Си Эс ХК", code: 318, logoUrl: "", price: 603.98, changePct: -2.32, changeAbs: -14.04, direction: "down" },
  ],
  comexTrade: [
    {
      id: 4051,
      mainType: "Нүүрс",
      category: "Баяжуулсан коксжих чанаргүй нүүрс",
      seller: "Мөнх тэнүүн оргил ХХК",
      startedAt: "2026-05-01T12:00:00",
      minPrice: 280.0,
      price: 337.0,
      currency: "CNY",
      changeAbs: 57.0,
      changePct: 20.36,
      direction: "up",
    },
  ],
  mseAList: [
    { row: 1, symbol: "AARD", name: "Ард санхүүгийн нэгдэл ХК", code: 326 },
    { row: 2, symbol: "APU", name: "АПУ ХК", code: 12, price: 937.0 },
    { row: 3, symbol: "BODI", name: "Боди интернэшнл ХК", code: 47 },
    { row: 4, symbol: "GOV", name: "Говь ХК", code: 162 },
    { row: 5, symbol: "KHAN", name: "Хаан банк ХК", code: 563, price: 1349.0 },
  ],
  mseBList: [
    { row: 1, symbol: "ADU", name: "Хөвсгөл алтан дуулга ХК", code: 402 },
    { row: 2, symbol: "AIC", name: "Ай Си Эс ХК", code: 318 },
    { row: 3, symbol: "MBG", name: "Булигаар ХК", code: 38, price: 16.1 },
  ],
  top20List: [
    { row: 1, symbol: "AARD", name: "Ард санхүүгийн нэгдэл ХК", code: 326 },
    { row: 2, symbol: "APU", name: "АПУ ХК", code: 12, price: 937.0 },
    { row: 3, symbol: "BODI", name: "Боди интернэшнл ХК", code: 47 },
    { row: 4, symbol: "GOV", name: "Говь ХК", code: 162 },
    { row: 5, symbol: "KHAN", name: "Хаан банк ХК", code: 563, price: 1349.0 },
    { row: 6, symbol: "MMX", name: "Материал импэкс ХК", code: 502 },
    { row: 7, symbol: "SUU", name: "Сүү ХК", code: 717, price: 660.0 },
    { row: 8, symbol: "TDB", name: "Худалдаа Хөгжлийн банк ХК", code: 880, price: 16000.0 },
    { row: 9, symbol: "TTL", name: "Таван толгой ХК", code: 783, price: 30000.0 },
    { row: 10, symbol: "UID", name: "Үндэсний хөрөнгийн бирж ХК", code: 802 },
  ],
};
