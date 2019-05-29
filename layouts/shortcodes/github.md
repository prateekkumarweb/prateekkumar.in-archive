{{- $v := .Get 0 -}}
<a href="https://github.com/{{- $v -}}" target="_blank">{{- if (.Get 1) -}}{{- .Get 1 -}}{{- else -}}@{{- .Get 0 -}}{{- end -}}</a>{{- "" -}}
