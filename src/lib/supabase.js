import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

let supabaseInstance;

if (supabaseUrl && supabaseAnonKey) {
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.error("Failed to initialize Supabase client:", err);
  }
}

if (!supabaseInstance) {
  console.warn(
    "Supabase environment variables (REACT_APP_SUPABASE_URL and/or REACT_APP_SUPABASE_ANON_KEY) are missing. " +
    "Mocking Supabase client to prevent application crash. Career, Apply, and Contact features will not work until credentials are provided."
  );

  const createMock = () => {
    const mock = {
      from: () => mock,
      select: () => mock,
      eq: () => mock,
      order: () => mock,
      insert: () => mock,
      storage: {
        from: () => ({
          upload: () => Promise.resolve({ data: null, error: new Error("Supabase is not configured.") }),
          getPublicUrl: () => ({ data: { publicUrl: "" } }),
        })
      },
      then: (onFulfilled) => {
        onFulfilled({ data: [], error: null });
      }
    };
    return mock;
  };
  supabaseInstance = createMock();
}

export const supabase = supabaseInstance;
