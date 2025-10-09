source "https://rubygems.org"

ruby "3.4.1"

gem "jekyll", "~> 4.3.3"
gem "webrick"            # needed for `jekyll serve` on Ruby 3+
gem "base64"             # Ruby 3.4 does not ship it by default
gem "logger"             # Ruby 3.5 will not ship it by default
gem "csv"

gem "kramdown-parser-gfm"
gem "no-style-please"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-remote-theme"
  gem "jekyll-seo-tag"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo"
  gem "tzinfo-data"
end

gem "wdm", platforms: [:mingw, :x64_mingw, :mswin]
