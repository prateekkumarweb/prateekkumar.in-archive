{{- $v := .Get 0 -}}
{{- if (isset .Site.Data.people $v) -}}
{{- $p := index .Site.Data.people $v -}}
<a href="https://github.com/{{- index $p "github" -}}" target="_blank">{{- index $p "name" -}}</a>{{- "" -}}
{{- else -}}
<a href="https://github.com/{{- $v -}}" target="_blank">{{- if (.Get 1) -}}{{- .Get 1 -}}{{- else -}}@{{- .Get 0 -}}{{- end -}}</a>{{- "" -}}
{{- end -}}