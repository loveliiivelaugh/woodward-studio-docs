# Reddit Mention Monitoring Workflow

## Overview

This guide describes a generic workflow for discovering, prioritizing, and reviewing Reddit discussions related to any set of target keywords.

The workflow is designed for cases where you want to:

- start from a set of keywords, brands, companies, topics, or entities
- discover relevant discussion across the web
- isolate Reddit-specific results
- shortlist the most promising Reddit threads
- collect thread context for later research, classification, or sentiment analysis

This guide intentionally avoids sensitive, environment-specific, and session-specific details so it can be reused as a general reference.

## What This Workflow Is For

Use this workflow when you need to:

- discover Reddit discussions related to a topic or keyword set
- monitor competitor or brand mentions
- find employee, customer, or community discussion
- build a shortlist of Reddit threads for manual review
- prepare text inputs for later sentiment analysis or qualitative review

## High-Level Architecture

This workflow works best as a layered pipeline:

1. keyword seeding
2. search discovery
3. Reddit result filtering
4. URL de-duplication
5. thread prioritization
6. metadata extraction
7. optional rendered-page extraction
8. manual or semi-manual review
9. downstream sentiment analysis or classification

The key design principle is:

- use search tools for broad discovery
- use Reddit-specific tools for follow-up extraction
- use browser automation only when simpler extraction is not enough
- keep a manual fallback because Reddit may block automated rendering

## Recommended Tooling Pattern

### Search discovery layer

Use a web search tool or API that can:

- search by keyword
- constrain results to `reddit.com`
- return structured results
- support result export to JSON or CSV

This layer is for discovering candidate Reddit URLs.

### Reddit follow-up layer

Use a Reddit-specific CLI, scraper, or parser that can:

- fetch subreddit pages
- fetch thread URLs
- extract post titles and metadata
- count or estimate thread activity

This layer is for validating and prioritizing Reddit targets.

### Browser layer

Use browser automation only when needed to:

- inspect rendered pages
- recover visible text that simple scraping misses
- validate page content manually or semi-manually

This layer is the least reliable because Reddit may apply anti-bot protections.

## Workflow Steps

## Step 1. Define your seed keywords

Start with a seed list of targets such as:

- company names
- product names
- brand names
- topic phrases
- competitor names
- community terms

Keep the initial list focused.

A good first pass is usually better than an exhaustive query explosion.

## Step 2. Create first-pass query variants

For each seed keyword, create a small number of practical query variants.

A common first-pass set is:

- exact keyword
- exact keyword + `reddit`
- exact keyword + a context term such as `employee`, `review`, `customer`, or `discussion`

You can later add second-pass variants for stronger topics, such as:

- `pay`
- `layoffs`
- `driver`
- `support`
- `pricing`
- `warehouse`
- `sales`
- `union`
- `review`

The idea is to begin broad and only expand where the first-pass results are promising.

## Step 3. Run discovery searches

Run the first-pass queries through your search/discovery tool.

Recommended behaviors:

- constrain to `reddit.com` when possible
- request structured output
- store raw responses
- store a summarized query log

For each query, capture:

- query text
- query variant type
- timestamp or run identifier
- result count
- sample titles
- sample URLs
- raw output location

## Step 4. De-duplicate Reddit URLs

Search discovery will often produce repeated links across query variants.

Build a de-duplicated Reddit URL list that contains at minimum:

- source keyword
- query variant
- result title
- result URL
- optional source label

This de-duplicated URL set becomes the core handoff point between discovery and extraction.

## Step 5. Rank and shortlist relevant threads

Not every discovered Reddit URL is worth deeper review.

Prioritize threads that appear to have:

- direct keyword relevance
- higher discussion activity
- likely firsthand experience
- strong operational, customer, employee, or market context
- clearer signal than broad news reposts or weak keyword collisions

Useful prioritization signals include:

- thread title relevance
- subreddit relevance
- comment-count labels
- likely user intent
- repeated appearance across multiple queries

The output of this step should be a focused shortlist of Reddit threads for deeper review.

## Step 6. Extract thread metadata

For each shortlisted thread, extract as much reliable metadata as possible.

Useful fields include:

- thread title
- thread URL
- author
- subreddit
- comment-count label
- post timestamp if available
- any available preview text

This stage is often enough to support ranking and triage even if full comment extraction is not yet available.

## Step 7. Attempt deeper thread extraction if needed

If your Reddit extraction layer supports it, try to recover:

- top-level comment text
- comment authors
- thread body text
- rendered text from the page

Be aware that this is often where Reddit becomes difficult.

Common issues include:

- partial HTML mismatch between old and modern Reddit views
- incomplete comment extraction from lightweight scrapers
- anti-bot checks in browser automation
- rendered pages blocked behind challenge or security screens

Because of that, deeper extraction should be treated as optional and best-effort.

## Step 8. Use a manual or semi-manual fallback

When browser automation is blocked or comment extraction is incomplete, use a manual review layer.

This means:

- open the top shortlisted Reddit threads in a real logged-in browser session
- capture the most relevant visible comments
- store the comments in a structured review sheet
- attach notes for later analysis

This is often the most reliable final step when Reddit blocks automated rendering.

## Recommended Data Outputs

A practical workflow should produce these artifacts:

### 1. Query summary CSV

One row per discovery query, including:

- seed keyword
- query variant
- query text
- hit count
- sample titles
- sample URLs
- raw file path

### 2. De-duplicated Reddit URL CSV

One row per unique Reddit URL, including:

- keyword
- query variant
- title
- URL
- source label

### 3. Focused thread review CSV or JSON

One row per shortlisted thread, including:

- keyword or entity
- thread URL
- title
- subreddit
- author
- comment-count label
- notes

### 4. Manual capture sheet

Used when rendered extraction is blocked.

Suggested fields:

- keyword or entity
- thread URL
- thread title
- subreddit
- captured comments
- reviewer notes
- sentiment label later
- confidence or relevance rating

## Operating Model Recommendation

The most practical operating model is a two-layer process.

### Automated layer

Use automation for:

- keyword discovery
- Reddit result collection
- URL de-duplication
- shortlist generation
- metadata extraction

### Manual or semi-manual layer

Use manual review for:

- final comment capture
- validation of ambiguous threads
- collecting text for sentiment analysis
- quality control

This balance keeps the workflow efficient while acknowledging that Reddit may block the deepest layer of automation.

## What This Workflow Does Well

This workflow is especially good at:

- finding Reddit threads related to a keyword set
- reducing a broad search space into a focused shortlist
- identifying strong research targets quickly
- producing structured artifacts for review and analysis

## Known Limitations

This workflow may struggle with:

- reliable full comment extraction at scale
- pages protected by anti-bot systems
- session-sensitive or challenge-gated Reddit views
- browser automation paths that are flagged by Reddit security systems

For that reason, the workflow should always include a manual fallback plan.

## Recommended Next Improvements

If you want to improve this workflow over time, useful next additions include:

- a reusable manual review template
- thread scoring rules
- sentiment-ready export formatting
- automated tagging by topic or theme
- a review queue for repeated monitoring runs
- a persistent datastore for tracking thread history across runs

## Summary

This workflow is best understood as a discovery and prioritization pipeline first, and a full content extraction pipeline second.

It is reliable for:

- finding relevant Reddit discussions
- prioritizing the best threads
- organizing artifacts for review

It is less reliable for:

- fully automated rendered comment extraction at scale

The recommended operating model is therefore:

- automate discovery and prioritization
- use manual or semi-manual review for the final text capture step
- then run sentiment analysis or other downstream analysis on the captured content
