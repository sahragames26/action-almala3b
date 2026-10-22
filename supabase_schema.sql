-- ==========================================================
-- أكشن الملاعب - Action Almala3b
-- كود إنشاء جدول الغرف وإعداد Realtime في Supabase
-- قم بنسخ هذا الكود بالكامل ولصقه في:
-- Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==========================================================

-- 1. إنشاء جدول الغرف rooms
create table if not exists public.rooms (
  code text primary key,
  state text not null default 'waiting', -- 'waiting' | 'playing' | 'finished'
  host_id text not null,
  players jsonb not null default '[]'::jsonb,
  game_state jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. فهرس للبحث السريع بكود الغرفة والحالة
create index if not exists idx_rooms_code on public.rooms (code);
create index if not exists idx_rooms_state on public.rooms (state);

-- 3. تفعيل التزامن اللحظي (Supabase Realtime) على جدول الغرف
alter publication supabase_realtime add table public.rooms;

-- 4. إعداد سياسات الأمان (Row Level Security - RLS)
-- تتيح لجميع اللاعبين القراءة والكتابة للغرف باستخدام المفتاح العام (Anon Key)
alter table public.rooms enable row level security;

-- السماح بالقراءة
create policy "Allow public read on rooms"
  on public.rooms for select
  using (true);

-- السماح بإنشاء غرفة جديدة
create policy "Allow public insert on rooms"
  on public.rooms for insert
  with check (true);

-- السماح بتحديث بيانات الغرفة وحركات اللعب
create policy "Allow public update on rooms"
  on public.rooms for update
  using (true);

-- السماح بحذف الغرفة عند انتهائها
create policy "Allow public delete on rooms"
  on public.rooms for delete
  using (true);

-- 5. دالة تنظيف تلقائية اختيارية لحذف الغرف القديمة التي مر عليها أكثر من 24 ساعة
create or replace function clean_old_rooms() returns void as $$
begin
  delete from public.rooms
  where created_at < now() - interval '24 hours';
end;
$$ language plpgsql security definer;
