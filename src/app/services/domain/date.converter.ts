/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export function todayAsISOString(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Converts '2017-01-20' to full ISO string e.g. '2017-01-20T00:00:00.000Z'
 * @param dateString
 */
export function toLongISOString(dateString: string): string {
  const date: Date = parseDate(dateString);
  return date.toISOString();
}

export function toShortISOString(dateString: string): string {
  return `${toLongISOString(dateString).slice(0, 10)}Z`;
}

export function toEndOfDay(dateString: string): string {
  const date: Date = parseDate(dateString);

  date.setDate(date.getDate() + 1);
  date.setTime(date.getTime() - 1);

  return date.toISOString();
}

export function addCurrentTime(date: Date): Date {
  const now: Date = new Date();

  date.setUTCHours(now.getUTCHours());
  date.setUTCMinutes(now.getUTCMinutes());
  date.setUTCSeconds(now.getUTCSeconds());
  date.setUTCMilliseconds(now.getUTCMilliseconds());

  return date;
}

export function parseDate(dateString: string): Date {
  const millis = Date.parse(dateString);
  const date: Date = new Date(millis);

  return date;
}
