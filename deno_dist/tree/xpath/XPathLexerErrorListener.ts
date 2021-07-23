/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */

// CONVERSTION complete, Burt Harris 10/14/2016

import { ANTLRErrorListener } from "../../ANTLRErrorListener.ts";
import { Override } from "../../Decorators.ts";
import { Recognizer } from "../../Recognizer.ts";
import { RecognitionException } from "../../RecognitionException.ts";

export class XPathLexerErrorListener implements ANTLRErrorListener<number> {
	@Override
	public syntaxError<T extends number>(
		recognizer: Recognizer<T, any>, offendingSymbol: T | undefined,
		line: number, charPositionInLine: number, msg: string,
		e: RecognitionException | undefined): void {
		// intentionally empty
	}
}
