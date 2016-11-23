# -*- encoding: utf-8 -*-
# stub: react 0.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "react"
  s.version = "0.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Kriss 'nu7hatch' Kowalik"]
  s.date = "2010-08-16"
  s.description = "A simple application that allows for remote execution of commands."
  s.email = "kriss.kowalik@gmail.com"
  s.executables = ["react"]
  s.extra_rdoc_files = ["LICENSE", "README.md"]
  s.files = ["LICENSE", "README.md", "bin/react"]
  s.homepage = "http://github.com/nu7hatch/react"
  s.rdoc_options = ["--charset=UTF-8"]
  s.rubygems_version = "2.5.1"
  s.summary = "Redis based remote command executor."

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<riot>, [">= 0.11.3"])
      s.add_runtime_dependency(%q<daemons>, [">= 0"])
    else
      s.add_dependency(%q<riot>, [">= 0.11.3"])
      s.add_dependency(%q<daemons>, [">= 0"])
    end
  else
    s.add_dependency(%q<riot>, [">= 0.11.3"])
    s.add_dependency(%q<daemons>, [">= 0"])
  end
end
