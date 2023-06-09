defmodule FracomexSynchro.EbpRepo do
  use Ecto.Repo,
    otp_app: :fracomex_synchro,
    adapter: Ecto.Adapters.Tds
end
