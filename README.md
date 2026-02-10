# DLCA Engine

Dual-Loop Conversational Architecture (DLCA) is a real-time,
full-duplex dialogue engine designed for interruptible,
context-aware voice conversations.

The system separates:
- A continuous reasoning and prioritization loop (subconscious)
- An interruptible expression loop (conscious)

This repository contains the core server-side engine.
Clients (web, mobile, desktop) connect via real-time audio transport
(e.g. WebRTC).

This is an experimental system focused on:
- Low-latency dialogue
- Human-like turn-taking
- Interruptible speech
