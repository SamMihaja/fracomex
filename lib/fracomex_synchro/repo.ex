defmodule FracomexSynchro.Repo do
  use Ecto.Repo,
    otp_app: :fracomex_synchro,
    adapter: Ecto.Adapters.Postgres

  use Scrivener, page_size: 20
end
