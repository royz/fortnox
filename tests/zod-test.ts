import z from "zod";

const s = z.iso.date();
type T = z.infer<typeof s>;
const t = s.parse("01-23-2023");

console.log(t);