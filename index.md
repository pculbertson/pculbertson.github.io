---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
### Publications

\* denotes equal contribution
<!-- Publications via Jekyll Scholar. -->
<div>
	<h3> Under Review | Accepted </h3>
</div>
{% bibliography --query @*[note ~= (?i)Under || note ~= (?i)Accepted || note ~= (?i)Press] %}

{% assign current_year = 'now' | date: '%Y' %}

{% for pub_year in (2016..current_year) reversed %}
{%- capture bib_count -%}
    {%- bibliography_count --query @*[year={{pub_year}}] -%}
{%- endcapture -%}
{%- assign bib_count = bib_count | abs -%}

{% if bib_count > 0 %}
<div class="publication-head-content">
    <h3> {{pub_year}} </h3>
</div>
{% bibliography --query @*[year={{pub_year}} && note !~ (?i)Under && note !~ (?i)Accepted && note !~ (?i)Press] %}
{% endif %}
{% endfor %}

<p class="pub-bib">Download <a href="../papers/papers.bib">bibtex</a>.</p>
<br>