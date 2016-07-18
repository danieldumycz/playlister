# -*- encoding: utf-8 -*-
# stub: omniauth-spotify 0.0.9 ruby lib

Gem::Specification.new do |s|
  s.name = "omniauth-spotify"
  s.version = "0.0.9"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Claudio Poli"]
  s.date = "2015-06-18"
  s.description = "OmniAuth strategy for Spotify"
  s.email = ["claudio@icorete.ch\n"]
  s.homepage = "https://github.com/icoretech/omniauth-spotify"
  s.rubygems_version = "2.5.1"
  s.summary = "OmniAuth strategy for Spotify"

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<omniauth-oauth2>, ["~> 1.1"])
    else
      s.add_dependency(%q<omniauth-oauth2>, ["~> 1.1"])
    end
  else
    s.add_dependency(%q<omniauth-oauth2>, ["~> 1.1"])
  end
end
