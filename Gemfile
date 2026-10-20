source "https://rubygems.org"

# Keep local builds aligned with GitHub Pages.
# GitHub Actions in this repo uses Ruby 2.7, so local builds should use
# the same Ruby version to avoid dependency solver issues.

gem "github-pages", group: :jekyll_plugins
gem "jekyll", "~> 3.9.3"
gem "kramdown-parser-gfm"
gem "sassc"
gem "webrick", "~> 1.8"
gem "rack", "~> 2.2"

group :jekyll_plugins do
  gem "jekyll-admin"
  gem "jekyll-avatar", "~> 0.7.0"
  gem "jekyll-feed", "~> 0.15.1"
  gem "jekyll-github-metadata", "~> 2.13.0"
  gem "jekyll-mentions", "~> 1.6.0"
  gem "jekyll-paginate", "~> 1.1"
  gem "jekyll-sitemap", "~> 1.4.0"
end
