import { supabaseKey,supabaseUrl } from "./SupabaseClient";
import axios from "axios";

export const myAxios = axios.create({
    baseURL: `${supabaseUrl}/rest/v1`,
    headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
    }
})
