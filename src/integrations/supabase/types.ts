export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string
          excerpt: string
          hero_image_url: string | null
          id: string
          is_published: boolean | null
          meta_description: string | null
          meta_title: string | null
          published_at: string | null
          read_time_minutes: number | null
          slug: string
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string
          hero_image_url?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          read_time_minutes?: number | null
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string
          excerpt?: string
          hero_image_url?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string | null
          read_time_minutes?: number | null
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          created_at: string
          email: string
          group_size: string | null
          id: string
          message: string
          name: string
          phone: string | null
          preferred_date: string | null
          trek: string | null
        }
        Insert: {
          created_at?: string
          email: string
          group_size?: string | null
          id?: string
          message: string
          name: string
          phone?: string | null
          preferred_date?: string | null
          trek?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          group_size?: string | null
          id?: string
          message?: string
          name?: string
          phone?: string | null
          preferred_date?: string | null
          trek?: string | null
        }
        Relationships: []
      }
      regions: {
        Row: {
          created_at: string
          description: string
          display_order: number
          hero_image_url: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          name: string
          short_description: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string
          display_order?: number
          hero_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          name: string
          short_description?: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          display_order?: number
          hero_image_url?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          short_description?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      review_media: {
        Row: {
          created_at: string
          id: string
          media_type: string
          media_url: string
          review_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          media_type: string
          media_url: string
          review_id: string
        }
        Update: {
          created_at?: string
          id?: string
          media_type?: string
          media_url?: string
          review_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "review_media_review_id_fkey"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "reviews"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          created_at: string
          id: string
          message: string
          rating: number
          reviewer_name: string
          status: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          rating: number
          reviewer_name: string
          status?: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          rating?: number
          reviewer_name?: string
          status?: string
        }
        Relationships: []
      }
      trek_faqs: {
        Row: {
          answer: string
          created_at: string
          display_order: number | null
          id: string
          is_global: boolean | null
          question: string
          trek_id: string | null
        }
        Insert: {
          answer: string
          created_at?: string
          display_order?: number | null
          id?: string
          is_global?: boolean | null
          question: string
          trek_id?: string | null
        }
        Update: {
          answer?: string
          created_at?: string
          display_order?: number | null
          id?: string
          is_global?: boolean | null
          question?: string
          trek_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trek_faqs_trek_id_fkey"
            columns: ["trek_id"]
            isOneToOne: false
            referencedRelation: "treks"
            referencedColumns: ["id"]
          },
        ]
      }
      trek_itinerary: {
        Row: {
          accommodation: string | null
          altitude_m: number | null
          created_at: string
          day_number: number
          description: string
          distance_km: number | null
          id: string
          meals: string | null
          title: string
          trek_id: string
        }
        Insert: {
          accommodation?: string | null
          altitude_m?: number | null
          created_at?: string
          day_number: number
          description?: string
          distance_km?: number | null
          id?: string
          meals?: string | null
          title: string
          trek_id: string
        }
        Update: {
          accommodation?: string | null
          altitude_m?: number | null
          created_at?: string
          day_number?: number
          description?: string
          distance_km?: number | null
          id?: string
          meals?: string | null
          title?: string
          trek_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trek_itinerary_trek_id_fkey"
            columns: ["trek_id"]
            isOneToOne: false
            referencedRelation: "treks"
            referencedColumns: ["id"]
          },
        ]
      }
      treks: {
        Row: {
          accommodation_description: string | null
          best_season: string | null
          created_at: string
          description: string
          difficulty: string
          display_order: number | null
          distance_km: number | null
          duration_days: number
          excludes: string[] | null
          gallery_images: string[] | null
          group_size_max: number | null
          group_size_min: number | null
          health_safety_info: string | null
          hero_image_url: string | null
          highlights: string[] | null
          id: string
          includes: string[] | null
          is_featured: boolean | null
          is_published: boolean | null
          max_altitude_m: number | null
          meals_description: string | null
          meeting_point: string | null
          meta_description: string | null
          meta_title: string | null
          name: string
          optional_extras: string[] | null
          packing_list: string[] | null
          rating: number | null
          region_id: string | null
          review_count: number | null
          schema_json: Json | null
          short_description: string
          slug: string
          starting_price_usd: number | null
          transportation: string | null
          updated_at: string
        }
        Insert: {
          accommodation_description?: string | null
          best_season?: string | null
          created_at?: string
          description?: string
          difficulty?: string
          display_order?: number | null
          distance_km?: number | null
          duration_days?: number
          excludes?: string[] | null
          gallery_images?: string[] | null
          group_size_max?: number | null
          group_size_min?: number | null
          health_safety_info?: string | null
          hero_image_url?: string | null
          highlights?: string[] | null
          id?: string
          includes?: string[] | null
          is_featured?: boolean | null
          is_published?: boolean | null
          max_altitude_m?: number | null
          meals_description?: string | null
          meeting_point?: string | null
          meta_description?: string | null
          meta_title?: string | null
          name: string
          optional_extras?: string[] | null
          packing_list?: string[] | null
          rating?: number | null
          region_id?: string | null
          review_count?: number | null
          schema_json?: Json | null
          short_description?: string
          slug: string
          starting_price_usd?: number | null
          transportation?: string | null
          updated_at?: string
        }
        Update: {
          accommodation_description?: string | null
          best_season?: string | null
          created_at?: string
          description?: string
          difficulty?: string
          display_order?: number | null
          distance_km?: number | null
          duration_days?: number
          excludes?: string[] | null
          gallery_images?: string[] | null
          group_size_max?: number | null
          group_size_min?: number | null
          health_safety_info?: string | null
          hero_image_url?: string | null
          highlights?: string[] | null
          id?: string
          includes?: string[] | null
          is_featured?: boolean | null
          is_published?: boolean | null
          max_altitude_m?: number | null
          meals_description?: string | null
          meeting_point?: string | null
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          optional_extras?: string[] | null
          packing_list?: string[] | null
          rating?: number | null
          region_id?: string | null
          review_count?: number | null
          schema_json?: Json | null
          short_description?: string
          slug?: string
          starting_price_usd?: number | null
          transportation?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "treks_region_id_fkey"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "regions"
            referencedColumns: ["id"]
          },
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
