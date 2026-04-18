# Reddit Manual Review Template

## Overview

This guide provides a reusable template for manually reviewing and capturing Reddit thread content when automated extraction is incomplete, unreliable, or blocked.

It is intended to complement a Reddit discovery and prioritization workflow by giving reviewers a consistent way to collect thread context and comment text for later analysis.

Typical downstream uses include:

- sentiment analysis
- topic labeling
- trend review
- qualitative research
- competitor or market monitoring

## When To Use This Template

Use a manual review template when:

- search discovery has already identified promising Reddit threads
- automated scraping recovered only partial metadata
- browser automation is blocked by security checks or anti-bot protections
- the final step requires reliable human judgment anyway

## Review Goals

A good manual Reddit review should answer:

- Is this thread actually relevant to the target keyword or topic?
- What is the overall tone of the discussion?
- What specific claims, themes, or complaints appear repeatedly?
- Which comments are most useful for later analysis?
- Is the thread strong enough to keep in the monitoring dataset?

## Recommended Review Process

1. Open the shortlisted Reddit thread in a real logged-in browser session.
2. Confirm that the thread is actually relevant.
3. Record basic thread metadata.
4. Capture the most useful visible comments.
5. Add reviewer notes and a relevance rating.
6. Optionally label sentiment, topic, or risk.

## Suggested Fields

Use the following fields in a CSV, spreadsheet, database, or markdown note.

### Core thread fields

- keyword_or_topic
- thread_url
- thread_title
- subreddit
- thread_author
- thread_date
- comment_count_label
- review_date
- reviewer

### Relevance and triage fields

- relevance_rating
- confidence_rating
- keep_for_analysis
- reason_kept
- reason_discarded

### Content summary fields

- thread_summary
- main_themes
- repeated_phrases
- notable_claims
- notable_entities

### Sentiment fields

- overall_sentiment
- sentiment_confidence
- sentiment_notes

### Comment capture fields

- comment_1_author
- comment_1_text
- comment_2_author
- comment_2_text
- comment_3_author
- comment_3_text
- comment_4_author
- comment_4_text
- comment_5_author
- comment_5_text

### Optional operational fields

- source_query
- source_variant
- source_run_id
- needs_follow_up
- follow_up_notes

## Suggested Ratings

### Relevance rating

Use a simple 1 to 5 scale:

- 1 = barely related
- 2 = weakly related
- 3 = somewhat relevant
- 4 = clearly relevant
- 5 = highly relevant and valuable

### Confidence rating

Use a simple 1 to 5 scale:

- 1 = low confidence in interpretation
- 2 = somewhat uncertain
- 3 = moderate confidence
- 4 = strong confidence
- 5 = very high confidence

### Overall sentiment

Use a consistent label set such as:

- very_negative
- negative
- mixed_negative
- neutral
- mixed_positive
- positive
- very_positive

Choose one stable label system and keep it consistent across reviews.

## Comment Selection Guidance

Do not try to capture every comment.

Instead, capture comments that are:

- directly relevant to the target topic
- representative of the thread’s overall tone
- unusually specific or informative
- repeated in substance across multiple users
- useful for future sentiment or thematic analysis

Try to avoid over-weighting:

- jokes with no informational value
- off-topic replies
- low-context fragments
- duplicate or near-duplicate comments

## Suggested Review Heuristics

When reading a thread, look for:

- firsthand experience
- recurring complaints or praise
- operational details
- product or service issues
- employee or customer sentiment
- timeline clues
- market or competitor comparisons

These often matter more than raw comment volume.

## Minimal CSV Example

A lightweight CSV can start with these columns:

```text
keyword_or_topic,thread_url,thread_title,subreddit,relevance_rating,overall_sentiment,thread_summary,comment_1_text,comment_2_text,comment_3_text,reviewer,review_date
```

## Expanded CSV Example

For a richer workflow, use something like:

```text
keyword_or_topic,thread_url,thread_title,subreddit,thread_author,thread_date,comment_count_label,reviewer,review_date,relevance_rating,confidence_rating,keep_for_analysis,overall_sentiment,sentiment_confidence,thread_summary,main_themes,repeated_phrases,notable_claims,notable_entities,comment_1_author,comment_1_text,comment_2_author,comment_2_text,comment_3_author,comment_3_text,needs_follow_up,follow_up_notes
```

## Review Tips

- Keep summaries short and factual.
- Separate observation from interpretation.
- If a claim looks important but uncertain, flag it instead of overstating it.
- Use the same sentiment labels and scales every time.
- Capture only enough comments to support later analysis.
- If the thread is weak, discard it quickly and move on.

## Recommended Workflow Pairing

This template works best after a discovery pipeline has already done the following:

- found Reddit URLs related to a keyword set
- de-duplicated links
- shortlisted promising threads
- recovered basic thread metadata

That way, manual review is only used on the highest-value threads.

## Output Recommendation

Store manual review outputs in a location that is easy to reuse later for:

- sentiment analysis
- reporting
- qualitative coding
- future monitoring runs

Good options include:

- CSV
- spreadsheet
- database table
- markdown review files

## Summary

A manual Reddit review template is the practical fallback when the automated pipeline can find the right threads but cannot reliably extract full rendered comment text.

Used correctly, it lets you:

- preserve the value of automated discovery
- collect the most important text reliably
- create high-quality inputs for later sentiment analysis or research
