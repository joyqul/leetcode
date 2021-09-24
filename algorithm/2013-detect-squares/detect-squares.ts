class DetectSquares {
	points: Map<string, number>
	constructor() {
		this.points = new Map<string, number>();
	}

	key(point: number[]): string {
		return `${point[0]}_${point[1]}`
	}

	getPointByKey(key: string): number[] {
		return key.split("_").map(k => parseInt(k))
	}

	add(point: number[]): void {
		const key = this.key(point)
		const amount = this.points.get(key)
		if (!amount) {
			this.points.set(key,1)
		} else {
			this.points.set(key,amount+1)
		}
	}

	getValidAmount(key1:string,key2:string): number {
		const key1Amount = this.points.get(key1)
		const key2Amount = this.points.get(key2)
		if (!key1Amount || !key2Amount) return 0
		return key1Amount*key2Amount
	}

	count(point: number[]): number {
		let result = 0
		this.points.forEach((pValue, pKey) => {
			const currentPoint = this.getPointByKey(pKey)
      if (currentPoint[0]!==point[0] && currentPoint[1]!==point[1]) return
      if (currentPoint[0]===point[0] && currentPoint[1]===point[1]) return
			const edge1 = currentPoint[0]-point[0]
			const edge2 = currentPoint[1]-point[1]
			const p1 = this.key([currentPoint[0]-edge2, currentPoint[1]+edge1])
			const p2 = this.key([point[0]-edge2, point[1]+edge1])
			result += (pValue* this.getValidAmount(p1, p2))
			
		})
		return result
	}
}
