FROM ruby:3.3.10-bookworm

WORKDIR /opt/jekyll

COPY Gemfile Gemfile.lock ./
RUN gem install bundler --version 2.3.25 --no-document \
    && bundle _2.3.25_ install --jobs 4 --retry 3

ENV BUNDLE_GEMFILE=/opt/jekyll/Gemfile
WORKDIR /srv/jekyll

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch", "--livereload", "--force_polling"]
