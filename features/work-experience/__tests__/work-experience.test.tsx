import { test } from "node:test";
import assert from "node:assert/strict";

import { formatDateRange } from "../index";

test("formatDateRange returns start and end joined by en dash", () => {
  assert.equal(formatDateRange("January 2025", "Present"), "January 2025 – Present");
});

test("formatDateRange preserves exact input values", () => {
  assert.equal(formatDateRange(" Jul 2024 ", " Dec 2024 "), " Jul 2024  –  Dec 2024 ");
});
