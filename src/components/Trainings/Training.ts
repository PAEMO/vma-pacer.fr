export class Training {
  constructor(
    readonly id: string,
    readonly percentage: number,
    readonly speed: number,
    readonly pace: string,
    readonly examples?: string[],
    readonly length?: number
  ) {}
}
