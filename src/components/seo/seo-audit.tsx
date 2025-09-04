'use client'

import { useEffect, useState } from 'react'

interface SEOAuditItem {
  name: string
  status: 'pass' | 'fail' | 'warning'
  description: string
  impact: 'high' | 'medium' | 'low'
}

export function SEOAudit() {
  const [auditResults, setAuditResults] = useState<SEOAuditItem[]>([])

  useEffect(() => {
    const performAudit = () => {
      const results: SEOAuditItem[] = []

      // Check meta title
      const title = document.querySelector('title')?.textContent
      results.push({
        name: 'Meta Title',
        status: title && title.length > 0 && title.length <= 60 ? 'pass' : 'fail',
        description: `Title length: ${title?.length || 0} characters (optimal: 50-60)`,
        impact: 'high'
      })

      // Check meta description
      const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content')
      results.push({
        name: 'Meta Description',
        status: metaDesc && metaDesc.length > 0 && metaDesc.length <= 160 ? 'pass' : 'fail',
        description: `Description length: ${metaDesc?.length || 0} characters (optimal: 150-160)`,
        impact: 'high'
      })

      // Check Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]')
      const ogDesc = document.querySelector('meta[property="og:description"]')
      const ogImage = document.querySelector('meta[property="og:image"]')
      results.push({
        name: 'Open Graph Tags',
        status: ogTitle && ogDesc && ogImage ? 'pass' : 'fail',
        description: `OG tags present: title(${!!ogTitle}), desc(${!!ogDesc}), image(${!!ogImage})`,
        impact: 'medium'
      })

      // Check structured data
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]')
      results.push({
        name: 'Structured Data',
        status: structuredData.length > 0 ? 'pass' : 'fail',
        description: `Found ${structuredData.length} JSON-LD scripts`,
        impact: 'high'
      })

      // Check headings hierarchy
      const h1s = document.querySelectorAll('h1')
      results.push({
        name: 'H1 Tag',
        status: h1s.length === 1 ? 'pass' : h1s.length === 0 ? 'fail' : 'warning',
        description: `Found ${h1s.length} H1 tags (optimal: 1)`,
        impact: 'high'
      })

      // Check images with alt text
      const images = document.querySelectorAll('img')
      const imagesWithAlt = document.querySelectorAll('img[alt]')
      const altTextCoverage = images.length > 0 ? (imagesWithAlt.length / images.length) * 100 : 100
      results.push({
        name: 'Image Alt Text',
        status: altTextCoverage === 100 ? 'pass' : altTextCoverage >= 90 ? 'warning' : 'fail',
        description: `${Math.round(altTextCoverage)}% of images have alt text (${imagesWithAlt.length}/${images.length})`,
        impact: 'medium'
      })

      // Check canonical URL
      const canonical = document.querySelector('link[rel="canonical"]')
      results.push({
        name: 'Canonical URL',
        status: canonical ? 'pass' : 'warning',
        description: canonical ? 'Canonical URL is set' : 'No canonical URL found',
        impact: 'medium'
      })

      // Check viewport meta tag
      const viewport = document.querySelector('meta[name="viewport"]')
      results.push({
        name: 'Viewport Meta Tag',
        status: viewport ? 'pass' : 'fail',
        description: viewport ? 'Viewport meta tag present' : 'Missing viewport meta tag',
        impact: 'high'
      })

      setAuditResults(results)
    }

    // Run audit after component mounts and DOM is ready
    const timer = setTimeout(performAudit, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (process.env.NODE_ENV !== 'development') {
    return null // Only show in development
  }

  const passCount = auditResults.filter(r => r.status === 'pass').length
  const failCount = auditResults.filter(r => r.status === 'fail').length
  const warningCount = auditResults.filter(r => r.status === 'warning').length
  const totalScore = Math.round((passCount / auditResults.length) * 100)

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white shadow-xl border border-gray-200 rounded-lg p-4 z-50 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-lg">SEO Audit</h3>
        <div className={`px-2 py-1 rounded text-sm font-semibold ${
          totalScore >= 90 ? 'bg-green-100 text-green-800' :
          totalScore >= 70 ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {totalScore}%
        </div>
      </div>
      
      <div className="flex gap-4 mb-4 text-sm">
        <span className="text-green-600">✓ {passCount} Pass</span>
        <span className="text-yellow-600">⚠ {warningCount} Warning</span>
        <span className="text-red-600">✗ {failCount} Fail</span>
      </div>

      <div className="space-y-2">
        {auditResults.map((item, index) => (
          <div key={index} className="flex items-start gap-2 text-sm">
            <span className={
              item.status === 'pass' ? 'text-green-600' :
              item.status === 'warning' ? 'text-yellow-600' :
              'text-red-600'
            }>
              {item.status === 'pass' ? '✓' : item.status === 'warning' ? '⚠' : '✗'}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.name}</span>
                <span className={`px-1 py-0.5 rounded text-xs ${
                  item.impact === 'high' ? 'bg-red-100 text-red-700' :
                  item.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {item.impact}
                </span>
              </div>
              <p className="text-gray-600 text-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
        SEO Audit Tool - Development Only
      </div>
    </div>
  )
}