# -*- encoding: utf-8 -*-
# stub: omniauth-soundcloud 1.0.1 ruby lib

Gem::Specification.new do |s|
  s.name = "omniauth-soundcloud"
  s.version = "1.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Lee Martin"]
  s.date = "2012-11-02"
  s.email = ["lee@soundcloud.com"]
  s.homepage = "https://github.com/soundcloud/omniauth-soundcloud"
  s.rubygems_version = "2.5.1"
  s.summary = "SoundCloud strategy for OmniAuth"

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<omniauth-oauth2>, ["~> 1.1.0"])
      s.add_development_dependency(%q<rspec>, ["~> 2.7.0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
    else
      s.add_dependency(%q<omniauth-oauth2>, ["~> 1.1.0"])
      s.add_dependency(%q<rspec>, ["~> 2.7.0"])
      s.add_dependency(%q<rake>, [">= 0"])
    end
  else
    s.add_dependency(%q<omniauth-oauth2>, ["~> 1.1.0"])
    s.add_dependency(%q<rspec>, ["~> 2.7.0"])
    s.add_dependency(%q<rake>, [">= 0"])
  end
end
