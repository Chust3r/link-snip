export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      url: {
        Row: {
          created_at: string
          id: number
          short_url: string
          url_base: string
        }
        Insert: {
          created_at?: string
          id?: number
          short_url: string
          url_base: string
        }
        Update: {
          created_at?: string
          id?: number
          short_url?: string
          url_base?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
