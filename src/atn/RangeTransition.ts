/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

// ConvertTo-TS run at 2016-10-04T11:26:36.5959980-07:00

import { ATNState } from "./ATNState.ts";
import { IntervalSet } from "../misc/IntervalSet.ts";
import { Override, NotNull } from "../Decorators.ts";
import { Transition } from "./Transition.ts";
import { TransitionType } from "./TransitionType.ts";

export class RangeTransition extends Transition {
	public from: number;
	public to: number;

	constructor(@NotNull target: ATNState, from: number, to: number) {
		super(target);
		this.from = from;
		this.to = to;
	}

	@Override
	get serializationType(): TransitionType {
		return TransitionType.RANGE;
	}

	@Override
	@NotNull
	get label(): IntervalSet {
		return IntervalSet.of(this.from, this.to);
	}

	@Override
	public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean {
		return symbol >= this.from && symbol <= this.to;
	}

	@Override
	@NotNull
	public toString(): string {
		return "'" + String.fromCodePoint(this.from) + "'..'" + String.fromCodePoint(this.to) + "'";
	}
}
