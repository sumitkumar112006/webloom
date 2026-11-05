/**
 * Centralized API configuration for Webloom.
 * Deployed Google Apps Script Web App endpoint connected to the Google Spreadsheet.
 */
export const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwd7xu2hhcVr10bLGUHI1gx-DGoX2aaveTg8ZQujKiGnY4b4mfjyJbzIHVucqpOKI9bWQ/exec';

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  source: string;
  prompt: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
}

/**
 * Submits form data to the Google Apps Script Web App.
 *
 * Uses text/plain to avoid browser CORS preflight OPTIONS failures.
 * Google Apps Script's doPost handler automatically parses JSON
 * from e.postData.contents and redirects to googleusercontent with
 * Access-Control-Allow-Origin: * so the client receives the true response.
 */
export async function submitLeadToGoogleSheets(
  payload: LeadPayload
): Promise<SubmissionResponse> {
  const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(payload),
    redirect: 'follow'
  });

  if (!response.ok) {
    throw new Error(`Server returned error status (${response.status} ${response.statusText}).`);
  }

  const rawText = await response.text();
  let parsed: any;
  try {
    parsed = JSON.parse(rawText);
  } catch {
    // If response is text but indicates success
    if (rawText.toLowerCase().includes('success')) {
      return {
        success: true,
        message: 'Lead submitted successfully.'
      };
    }
    throw new Error('Received unexpected response format from server.');
  }

  if (parsed && (parsed.success === true || parsed.status === 'success')) {
    return {
      success: true,
      message: parsed.message || 'Lead submitted successfully.'
    };
  }

  throw new Error(parsed?.message || 'Submission could not be completed. Please try again.');
}

