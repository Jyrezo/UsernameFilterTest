"use server"

import { englishDataset, englishRecommendedTransformers, RegExpMatcher, TextCensor } from "obscenity";

const matcher = new RegExpMatcher({
	...englishDataset.build(),
	...englishRecommendedTransformers,
});
const censor = new TextCensor();

export async function filterText(text: string){
    const matches = matcher.getAllMatches(text)

    return censor.applyTo(text, matches)
}