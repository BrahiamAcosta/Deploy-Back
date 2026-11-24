create table if not exists public.peliculas (
  id bigint generated always as identity primary key,
  nombre text not null check (char_length(trim(nombre)) > 0),
  created_at timestamptz not null default now()
);

alter table public.peliculas enable row level security;
