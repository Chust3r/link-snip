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
          user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          short_url: string
          url_base: string
          user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          short_url?: string
          url_base?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "url_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
